import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {...props}
  }
   
  //state = { 
    //store: { 
      //lists: [ {...}, {...} , {...} ] ,
      //allCards: { a: {...} , b: {...} , ... }  
    //} 
  //}
  handleDelete = (listId, cardId) => {
    console.log(listId, cardId)
    const newLists = this.state.store.lists.map( list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId)
      return list
    } )
    const newAllCards = Object.assign({}, this.state.store.allCards)
    delete newAllCards[cardId]
    const newStore = {lists: newLists, allCards: newAllCards}
    this.setState({
      store : newStore
    })
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  handleRandomCard = (listId) => {
    const myNewCard = this.newRandomCard()
    const newLists = this.state.store.lists.map( list =>{
      if (list.id === listId) {
        list.cardIds = [...list.cardIds, myNewCard.id]
      }
      return list
    })
    const newAllCards = {...this.state.store.allCards, [myNewCard.id]: myNewCard}
    this.setState({
      store: {
        lists: newLists,
        allCards: newAllCards }
    })
  }

  render() {
    // console.log(this.state)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map((list, index) => (
            <List
              key={index}
              listKey={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              handleDelete={(a,b)=>this.handleDelete(a,b)}
              handleRandomCard={this.handleRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
