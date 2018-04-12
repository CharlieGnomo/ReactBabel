import React from 'react'
import PropTypes from 'prop-types'

import Input from './components/Input'
import Radio from './components/Radio'

const WonderForm = props => {
    return (
        <div className="wonder-form">
            <Input type="text" onChange={props.onInputChange} name="username"/>
            <Input type="text" onChange={props.onInputChange} name="nombre"/>
            <Input type="text" onChange={props.onInputChange} name="apellidos"/>
            <Input type="number" onChange={props.onInputChange} name="edad"/>
            <Radio name="gender" values={['man','woman','other']} onInputChange={props.onInputChange}/>
            <Radio name="preferencias" values={['man','woman','other']} onInputChange={props.onInputChange}/>
        </div>
    )
}

export default WonderForm

WonderForm.propTypes = {
    /* onUsernameChange: PropTypes.func.isRequired, */
    onInputChange: PropTypes.func.isRequired,
}