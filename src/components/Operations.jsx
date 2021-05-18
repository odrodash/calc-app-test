import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Operations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation}/>
        <Button text="-" clickHandler={onClickOperation}/>
        <Button text="*" clickHandler={onClickOperation}/>
        <Button text="/" clickHandler={onClickOperation}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </section>
)

Operations.propTypes = {
    onClickEqual: PropTypes.func.isRequired,
    onClickOperation: PropTypes.func.isRequired
}

export default Operations