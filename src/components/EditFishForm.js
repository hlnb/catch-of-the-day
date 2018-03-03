import React from "react";

class EditFishForm extends React.Component{

   render(){
      return (
      <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name}/>
        <input name="price" type="text"onChange={this.handleChange} value={this.props.fish.price}/>
        <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="avaiable">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}/>
        <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image} />      
      </div>
      );
   }
}

export default EditFishForm;

