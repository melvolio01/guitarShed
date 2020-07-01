import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Directory from './components/directory/directory'
import Shop from './components/shopPage/shop'
import SignInRegister from './components/signInRegister/signInRegister'
import Header from './components/header/header'
import Checkout from './components/checkout/checkout'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
// import setCurrentUser action for use in mapDispatchToProps
import { setCurrentUser } from './redux/user/user.action'
import './app.css';


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // userAuth will either be null or the object received back from firebase
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // onSnapshot observes authentication changes
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={Directory} />
          <Route path="/shop" component={Shop} />
          <Route path="/fender" render={(props) => <Shop {...props} guitarType={"fender"} />} />
          <Route path="/gibson" render={(props) => <Shop {...props} guitarType={"gibson"} />} />
          <Route path="/acoustic" render={(props) => <Shop {...props} guitarType={"acoustic"} />} />
          <Route path="/electric" render={(props) => <Shop {...props} guitarType={"electric"} />} />
          <Route path="/other" render={(props) => <Shop {...props} guitarType={"other"} />} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/signIn" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInRegister />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
