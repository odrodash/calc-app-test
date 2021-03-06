import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="text-small" text="clear" clickHandler={onContentClear}/>
        <Button text="&larr;"  clickHandler={onDelete}/>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions

