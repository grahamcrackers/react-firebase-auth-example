/* eslint-disable import/no-named-as-default */

import React from "react";
import firebase, { auth, provider } from '../utils/firebase.js'
import { hot } from "react-hot-loader";

class App extends React.Component {
    state = {
        currentItem: '',
        username: '',
        items: [],
        user: null
    }

    componentDidMount() {
        // Check to see if user was logged in already
        auth.onAuthStateChanged((user) => {
            if (user) {
              this.setState({ user });
            } 
        });
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].title,
              user: items[item].user
            });
          }
          this.setState({
            items: newState
          });
        });
    }
      
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem,
            user: this.state.user.displayName || this.state.user.email
        }
        itemsRef.push(item);
        this.setState({
            currentItem: '',
            username: ''
        });
    }

    logout() {    
        auth.signOut().then(() => {
            this.setState({
                user: null
            });
        })
    }

    login() {
        auth.signInWithPopup(provider) 
            .then((result) => {
            const user = result.user;
            this.setState({
                user
            });
        });
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }

    render() {
        return (
            <div className='app'>
                <header>
                    <div className='wrapper'>
                        <h1>Fun Food Friends</h1>
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>  
                        {this.state.user ?
                            <button onClick={this.logout.bind(this)}>Log Out</button>                
                            :
                            <button onClick={this.login.bind(this)}>Log In</button>              
                        }
                    </div>
                </header>
                {this.state.user ?
                    <div>
                        <div className='user-profile'>
                            <img src={this.state.user.photoURL} />
                        </div>
                        <div className='container'>
                            <section className='add-item'>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <input type="text" name="username" placeholder="What's your name?" defaultValue={this.state.user.displayName || this.state.user.email} />
                                <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange.bind(this)} value={this.state.currentItem} />
                                <button>Add Item</button>
                            </form>
                            </section>
                            <section className='display-item'>
                            <div className="wrapper">
                            <ul>
                                {this.state.items.map((item) => {
                                    return (
                                        <li key={item.id}>
                                        <h3>{item.title}</h3>
                                        <p>brought by: {item.user}
                                            {item.user === this.state.user.displayName || item.user === this.state.user.email ?
                                            <button onClick={() => this.removeItem(item.id)}>Remove Item</button> : null}
                                        </p>
                                        </li>
                                    )
                                })}
                            </ul>
                            </div>
                        </section>
                        </div>
                    </div>
                    :
                    <div className='wrapper'>
                    <p>You must be logged in to see the potluck list and submit to it.</p>
                    </div>
                }
            </div>
        );
    }
}


export default hot(module)(App);
