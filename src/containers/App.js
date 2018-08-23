import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/header/Header';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

class App extends React.Component {

  static getBreadcrumb() {
    return <Link to="/" activeClassName="active">Home</Link>
  }

  render() {

    return (
      <div className="">
        <Header />
        <Breadcrumb router={this.props.routes} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}

export default connect(
  mapStateToProps,
  {}
)(App);
