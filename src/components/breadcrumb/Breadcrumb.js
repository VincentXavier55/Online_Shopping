import React, { Component } from 'react';

export default class Breadcrumbs extends Component {
    constructor(props){
        super(props);
    }
  render() {

    return (
      <div id="breadcrumbs">
        <ul className="breadcrumb">
        {this.props.router &&
            this.props.router.map(function(item,i){
              return <li key={i}>{item.component.getBreadcrumb()}</li>
              })
        }
        </ul>
    </div>
    )
  }
}