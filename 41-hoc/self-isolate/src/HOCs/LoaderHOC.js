import React from 'react';

 const  LoaderHOC =  WrappedComponent => {
  return class LoaderHOC extends React.Component {
      isReady = () => {
        // console.log("Loader HOC", this.props)
        return this.props.students.length > 0 
      }

      render(){
        return (<>{this.isReady() ? <WrappedComponent {...this.props} /> : <h1> App is Loading ... </h1> }</>)
      }
    }
}

export default LoaderHOC