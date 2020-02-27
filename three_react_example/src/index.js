import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as Three from "three";
import "./index.css";
import { RGBA_ASTC_10x5_Format } from "three";
import {buildScene} from './App/initialization';

class App extends Component {
	constructor(props){
		super(props);
		this.el = React.createRef();
	}

  componentDidMount() {	
	buildScene(this.el.current);
}
  render() {
    return <div ref={this.el}/>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
