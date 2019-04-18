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

  render() {
    // const { store } = this.state
    console.log(this.state)
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
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
