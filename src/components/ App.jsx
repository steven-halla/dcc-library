import React, {Component} from "react";
import './App.css';
import {TitleBar} from "./TitleBar/TitleBar";

export class App extends Component {
  constructor(props) {
    super(props);
    this.books = [
      {title: "Ready Player 1", author: "Ernest Cline"},
      {title: "All the light we cannot see", author: "anothony Doerr"},
      {title: "The First and Last Freedom", author: "Jiddu Krishnaurmit"}
    ];
    this.state = {
      bookNumber: 0
    };
  }

  goToNextBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber ++;
    if(tempBookNumber === this.books.length) {
      tempBookNumber = 0;
    }
    this.setState({
      bookNumber: tempBookNumber
    });
  }

  render(){
    return (
      <div className="container-fluid">

        <TitleBar />
        <div className="row">


          {/*will need a button soon*/}
          <div className="col-md-4">

          </div>

          <div className="col-md-4">
            <h1>{this.books[this.state.bookNumber].title}</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className="col-md-4">
            <button onClick={this.goToNextBook}>Next Book</button>
          </div>


        </div>

      </div>

    )
  }
}
