import React from 'react'
import {Redirect} from 'react-router-dom'

function PrivacyHOC(WrappedComponent) {
  return (
    class PrivacyHOC extends React.Component {
      isAuthorized = () => {
        // console.log("Privacy Component", this.props)
        return true
      }
      render(){
        return (
          <>
            { this.isAuthorized() ? <WrappedComponent {...this.props}/> : <Redirect to="/noyall" />}
          </>
        )
      }
    }
  )
}

export default PrivacyHOC
