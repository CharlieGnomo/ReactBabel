import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import WonderForm from './components/WonderForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'Rafa',
            nombre: 'Rafa',
            apellidos: 'Lopez',
            age: 28,
            gender: 'hombre'
        }
    }

    onUsernameChange = username => {
        this.setState({username})
    }

    onInputChange = (key, value) => {
        this.setState({[key]: value})
    }

    isOld = () => {
        return this.state.age > 28;
    }


    render() {
        const { username, age, nombre, apellidos, gender  } = this.state
        const message = `USERNAME ${username} - NAME: ${nombre} - SURNAME: ${apellidos} - AGE: ${age} - GENERO: ${gender}`

        return (
            <div className="App">
                <Header logo={logo} />
                <Intro message={message} />
                {this.isOld() && <p>Eres viejo!</p>}
                <WonderForm
                    onInputChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default App;
