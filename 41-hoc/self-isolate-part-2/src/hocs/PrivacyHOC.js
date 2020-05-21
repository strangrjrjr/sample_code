import React from 'react'
import { Redirect } from 'react-router-dom'

export default function PrivacyHOC(WrappedComponent) {
    return (
        class PrivacyHOC extends React.Component {
            render() {
                return false ? <WrappedComponent {...props} /> : <Redirect to='/noyall' />
            }
        }
    )
}