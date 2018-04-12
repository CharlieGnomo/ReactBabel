import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            type: 'text',
            name: '',
        }
    }

    onValueChange = e => {
        let value = e.target.value
        const {
            onChange,
            type,
            name
        } = this.props
        if (type === 'number') {
            onChange('age', value);
            if (value > 28) {

            }
        } else {
            if (type === 'radio') {
                onChange('genero', value);
            } else {
                if (name === 'username') {
                    onChange('username', value);
                } else {
                    if (name === 'nombre') {
                        onChange('nombre', value);
                    } else {
                        onChange('apellidos', value);
                    }
                }
            }
        }
        this.setState({
            inputValue: value
        })
    }

    render() {
        const {
            inputValue
        } = this.state

        return ( <input type = {this.props.type} onChange = {this.onValueChange} value = {inputValue}/>)
    }
}

export default Input;