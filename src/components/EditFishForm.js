import React from "react";

class EditFishForm extends React.Component{
   handleChange = event =>{
      console.log(event.target.name);
      //update that fish 
      //1. take a copy of the current fish
      const updatedFish ={
         ...this.props.fish, 
         [event.target.name]: event.target.value
      };
      this.props.updateFish(this.props.index, updatedFish);
   }
   render(){
      return <div className="fish-edit">
          <input name="name" type="text" onChange={this.handleChange} value={this.props.fish.name} />
          <input name="price" type="text" onChange={this.handleChange} value={this.props.fish.price} />
          <select name="status" onChange={this.handleChange} value={this.props.fish.status}>
            <option value="avaiable">Fresh</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
          <input name="image" type="text" onChange={this.handleChange} value={this.props.fish.image} />
          <button onClick={()=> this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>;
   }
}

export default EditFishForm;

