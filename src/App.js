import React from 'react';
import './App.css';
import Login from './Containers/Login';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Explore from './Containers/Explore';
import Home from './Containers/Home';
import Signup from './Containers/Signup';
import { BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.Component {


    render(){
        return(
            <div className="myApp">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" exact component={Login}/>>
                            <Route path="/about" exact component={About}/>
                            <Route path="/contact" exact component={Contact}/>
                            <Route path="/explore" exact component={Explore}/>
                            <Route path="/signup" exact component={Signup}/>                 
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
   
}

export default App;