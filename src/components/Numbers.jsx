import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Numbers = ({onClickNumber}) => {
    const numbers = [1,2,3,4,5,6,7,8,9,0]

    const renderButtons = () => {
        return (
            numbers.map(number => (
                <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
            ))
        )
    }
    return (
        <section className="numbers">
            {renderButtons()}
        </section>)
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers