import React, { Component } from 'react';

export class BookCreator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title:'',
      author:'',
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNewBook(this.state)
  }


  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">Book name</label>
        <input name="title"  onChange={this.handleChange} type="text" value={this.state.title}/>
        <label  htmlFor="">Author</label>
        <input name="author" onChange={this.handleChange} type="text" value={this.state.author}/>
        <button type="submit">Create Book</button>
      </form>
    );
  }
}
