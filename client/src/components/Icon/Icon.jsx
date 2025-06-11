import React from 'react'

const Icon = ({ name, className = '', ...rest }) => {
	return <i className={`${name} ${className} icon`} {...rest} />
}

export default Icon
