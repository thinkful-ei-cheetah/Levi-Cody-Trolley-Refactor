import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
   state={
    starwarsNames: [],
    error:null,
    
   }

  

  handleSearch = (e) => {
    e.preventDefault()
console.log(e.target)


const searchURL = 'https://swapi.co/api/people/';

   
    const url = searchURL 

    const options = {
      method: 'GET',
      headers: {

        "Content-Type": "application/json"
             }
    };
console.log(url)
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
       console.log(data)
        const listItems = data.results.map( list => {
          
          return {
            name:list.name
          };
        })

        this.setState({
          starwarsNames: listItems,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
    }


  render() {
    const errorMessage = this.state.error ? <div>{this.state.error}</div> : false

  

    // const books = lib.map(book => {
    //   return <Book
    //     title={book.title}
    //     author={book.author}
    //     description={book.description}
    //     thumbnail_URL={book.thumbnail_URL}
    //     saleability={book.saleability}
    //     price={book.price}
    //   />
    // });

    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <label>Star Wars Search</label>
          <input type='text' name='star-search'/>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
   }
  }
