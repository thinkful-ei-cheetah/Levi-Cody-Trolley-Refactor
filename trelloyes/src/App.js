import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
constructor(props){
  super()
  this.state = props
  }
   
  

  handleDelete = (id) => {
    console.log(this.state)
    this.setState({
      store : this.state.store.lists.filter((item,index ) => index !== id)
    })
  }

  render() {
    // const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        {console.log(this.state)}
        <div className='App-list'>
          {state.store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              handleDelete={()=>this.handleDelete()}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
