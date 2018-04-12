import React from 'react'


class Radio extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            values: props.values,
            actIveValue: props.defaultG
        }
    }

    onValueChange = e => {
        const value = e.target.value;
        this.setState({
            actIveValue: value
        })
        this.props.onInputChange(this.props.name, value);
    }

    render() {
        const {values, actIveValue} = this.state;
        const {defaultG, name} = this.props;

        return ( 
            <div>
                {values.map((value, i) => {
                    return (
                        <span>
                            <label htmlFor=''>{value}</label>
                            <input type="radio" name={this.props.name} key={i} value={value} checked={value === actIveValue} onClick={this.onValueChange}/>
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default Radio;