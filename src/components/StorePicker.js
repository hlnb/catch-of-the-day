import React, {Fragment} from 'react';
import Proptypes from "prop-types";
import {getFunName } from '../helpers';
class StorePicker extends React.Component {
  myInput = React.createRef();
  static propTypes ={
    history: Proptypes.object
  }
  goToStore = (event) => {
    //1. stor the form from submitting
    event.preventDefault();
    //2. get the text from tht input
    const storename = this.myInput.value.value;
    //3.change page to  /store/whatever-they-entered
    this.props.history.push(`/store/${storename}`)
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.goToStore} className="store-selector">
          {/* making a comment*/}
          <h2>Please Enter a Store</h2>
          <input
            ref={this.myInput}
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit"> Visit Store -> </button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;