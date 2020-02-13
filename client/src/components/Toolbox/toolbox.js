import React, { Component } from "react";
import { connect } from 'react-redux';

import { editElement } from './../../store/actions/elements';

import "./toolbox.css";
class Toolbox extends Component {
  constructor(props){
    super(props);
    // this.selectedElement = document.getElementById(this.props.element);
    // var borderWidth = window.getComputedStyle(this.selectedElement, null).getPropertyValue('width');
    this.state = {
      width: this.props.elementProperties && parseInt(this.props.elementProperties.width) ,
      height: this.props.elementProperties && parseInt(this.props.elementProperties.height),
      // color: this.props.elementProperties && parseInt(this.props.elementProperties.color),
      paddingTop: this.props.elementProperties && parseInt(this.props.elementProperties.paddingTop),
      paddingRight: this.props.elementProperties && parseInt(this.props.elementProperties.paddingRight),
      paddingBottom: this.props.elementProperties && parseInt(this.props.elementProperties.paddingBottom),
      paddingLeft: this.props.elementProperties && parseInt(this.props.elementProperties.paddingLeft),
      marginTop:  this.props.elementProperties && parseInt(this.props.elementProperties.marginTop),
      marginRight: this.props.elementProperties && parseInt(this.props.elementProperties.marginRight),
      marginBottom: this.props.elementProperties && parseInt(this.props.elementProperties.marginBottom),
      marginLeft: this.props.elementProperties && parseInt(this.props.elementProperties.marginLeft),
    }
}

  componentDidUpdate(prevProps) {
    if(prevProps.elementProperties !== this.props.elementProperties) {
      this.setState({
        width: parseInt(this.props.elementProperties.width),
        height: parseInt(this.props.elementProperties.height),
        paddingTop: parseInt(this.props.elementProperties.paddingTop),
        paddingRight: parseInt(this.props.elementProperties.paddingRight),
        paddingBottom: parseInt(this.props.elementProperties.paddingBottom),
        paddingLeft: parseInt(this.props.elementProperties.paddingLeft),
        marginTop: parseInt(this.props.elementProperties.marginTop),
        marginRight: parseInt(this.props.elementProperties.marginRight),
        marginBottom: parseInt(this.props.elementProperties.marginBottom),
        marginLeft: parseInt(this.props.elementProperties.marginLeft),
        positionTop: parseInt(this.props.elementProperties.positionTop),
        positionRight: parseInt(this.props.elementProperties.positionRight),
        positionBottom: parseInt(this.props.elementProperties.positionBottom),
        positionLeft: parseInt(this.props.elementProperties.positionLeft)
      });
    }
  }

  changeStyle = (element, style) => {
    let domElement = document.getElementById(element._id);
    for(let key in style){
      domElement.style[key] = style[key];
    }
    let stringHTML = domElement.outerHTML;
    this.props.editElement({ _id: element._id, element: stringHTML });
  }

  onWidthChangeHandler = (e) => {
    let width = e.target.value;
    this.setState(() => ({width}));
    this.changeStyle(this.props.element, {width: `${width}px`});
  }

  onHeightChangeHandler = (e) => {
    let height = e.target.value;
    this.setState(() => ({height}));
    this.changeStyle(this.props.element, {height: `${height}px`})
  }

  onPaddingTopChangeHandler = (e) => {
    let paddingTop = e.target.value;
    this.setState(() => ({paddingTop}));
    this.changeStyle(this.props.element, {paddingTop: `${paddingTop}px`})
  }

  onPaddingRightChangeHandler = (e) => {
    let paddingRight = e.target.value;
    this.setState(() => ({paddingRight}));
    this.changeStyle(this.props.element, {paddingRight: `${paddingRight}px`})
  }

  onPaddingBottomChangeHandler = (e) => {
    let paddingBottom = e.target.value;
    this.setState(() => ({paddingBottom}));
    this.changeStyle(this.props.element, {paddingBottom: `${paddingBottom}px`})
  }

  onPaddingLeftChangeHandler = (e) => {
    let paddingLeft = e.target.value;
    this.setState(() => ({paddingLeft}));
    this.changeStyle(this.props.element, {paddingLeft: `${paddingLeft}px`})
  }

  onMarginTopChangeHandler = (e) => {
    let marginTop = e.target.value;
    this.setState(() => ({marginTop}));
    this.changeStyle(this.props.element, {marginTop: `${marginTop}px`})
  }

  onMarginRightChangeHandler = (e) => {
    let marginRight = e.target.value;
    this.setState(() => ({marginRight}));
    this.changeStyle(this.props.element, {marginRight: `${marginRight}px`})
  }

  onMarginBottomChangeHandler = (e) => {
    let marginBottom = e.target.value;
    this.setState(() => ({marginBottom}));
    this.changeStyle(this.props.element, {marginBottom: `${marginBottom}px`})
  }

  onMarginLeftChangeHandler = (e) => {
    let marginLeft = e.target.value;
    this.setState(() => ({marginLeft}));
    this.changeStyle(this.props.element, {marginLeft: `${marginLeft}px`})
  }

  onPositionTopChangeHandler = (e) => {
    let positionTop = e.target.value;
    this.setState(() => ({positionTop}));
    this.changeStyle(this.props.element, {top: `${positionTop}px`})
  }

  onPositionRightChangeHandler = (e) => {
    let positionRight = e.target.value;
    this.setState(() => ({positionRight}));
    this.changeStyle(this.props.element, {right: `${positionRight}px`})
  }

  onPositionBottomChangeHandler = (e) => {
    let positionBottom = e.target.value;
    this.setState(() => ({positionBottom}));
    this.changeStyle(this.props.element, {bottom: `${positionBottom}px`})
  }

  onPositionLeftChangeHandler = (e) => {
    let positionLeft = e.target.value;
    this.setState(() => ({positionLeft}));
    this.changeStyle(this.props.element, {left: `${positionLeft}px`})
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <div className="position-flex">
                <a href="#">
                  {" "}
                  <i className="fas fa-copy"> </i>
                </a>
                <a href="#">
                  <i className="fas fa-paste"></i>
                </a>
                <a 
                  href="#"
                  onClick= {() => this.changeStyle(this.props.element, {color: 'yellow'})}
                >
                  {" "}
                  <i className="fas fa-home"> </i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
            </div>
            <li className="position-flex">
              <label>color</label>
              <input disabled= {!this.props.element} type= 'color'/>
            </li>
            <li className="position-flex">
              <label>width</label>
              <input 
                value={this.state.width} 
                onChange= {(e) => this.onWidthChangeHandler(e)}
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
              />
            </li>
            <li className="position-flex">
              <label>height</label>
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.height}
                onChange= {this.onHeightChangeHandler}
              />
            </li>
            <li className="position-flex">
              <label>padding</label>
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.paddingTop} // padding top
                onChange= {this.onPaddingTopChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.paddingRight} // padding right
                onChange= {this.onPaddingRightChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.paddingBottom} // padding bottom
                onChange= {this.onPaddingBottomChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.paddingLeft} // padding left
                onChange= {this.onPaddingLeftChangeHandler}
              />
            </li>
            <li className="position-flex">
              <label>margin</label>
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.marginTop}
                onChange= {this.onMarginTopChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.marginRight}
                onChange= {this.onMarginRightChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.marginBottom}
                onChange= {this.onMarginBottomChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.marginLeft}
                onChange= {this.onMarginLeftChangeHandler}
              />
            </li>
            <li className="position-flex">
              <label>position</label>
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.positionTop}
                onChange= {this.onPositionTopChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.positionRight}
                onChange= {this.onPositionRightChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.positionBottom}
                onChange= {this.onPositionBottomChangeHandler}
              />
              <input 
                className= "number-inpt" 
                type= 'number'
                disabled= {!this.props.element}
                value= {this.state.positionLeft}
                onChange= {this.onPositionLeftChangeHandler}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editElement: (element) => dispatch(editElement(element))
})
export default connect(null, mapDispatchToProps)(Toolbox);