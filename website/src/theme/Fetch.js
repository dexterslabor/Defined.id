import React, { Component } from 'react';
import classnames from 'classnames';
import {renderToString} from 'react-dom/server'
import {MDXProvider} from '@mdx-js/react'

let API;

class Fetch extends Component {
  
  constructor(props) {
    super(props);
    API = props.URL

    this.state = {
        data: null,
        isLoading: false,
      };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => response.json())
      .then(data => {
          console.log(data)
        this.setState({data: data, isLoading: false })
      }).catch(error => console.log(error));
  }

  
  render() { 
    const { data, isLoading } = this.state;
    if (isLoading) {
        return <p>Loading ...</p>;
      }
      
    return data
  }
 
}
 
export default Fetch;