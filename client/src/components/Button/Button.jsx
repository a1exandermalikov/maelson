import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import './Button.css'

export const Button = ({
	children,
	variant = 'default',
	className,
	disabled,
	path,
	...rest
}) => {
	const isDisabled = disabled ?? variant === 'disabled'
	const baseClass = clsx('btn-component', `btn-${variant}`, className)

	if (path && !isDisabled) {
		return (
			<Link to={path} className={baseClass} {...rest}>
				{children}
			</Link>
		)
	}

	return (
		<button className={baseClass} disabled={isDisabled} {...rest}>
			{children}
		</button>
	)
}
