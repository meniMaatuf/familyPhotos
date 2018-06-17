import React, {Component} from 'react';
import ButtonAppBar from "./components/AppBar/AppBar.component";
import PhotosList from "./components/PhotosList/PhotosList.component";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title"></h1>
                </header>
                <p className="App-intro">
                    <ButtonAppBar></ButtonAppBar>
                    <PhotosList></PhotosList>
                </p>
            </div>
        );
    }
}

export default App;
