import React, { Component } from "react";
import "./Style.sass";
import { Button } from "antd";

class ButtonBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const size = this.state.size;

    return (
      <div>
        <p className='paragraph'>tes </p>
        <Button className='primary-one' value='small' type="danger">Primary</Button>
      </div>
    );
  }
}

export default ButtonBasic;
