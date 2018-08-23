import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes, { object, number } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);

		//function bindings
		//set initial state
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.state = {

		};
	}

	show(e) {
		this.setState({ drpDwnVisible: true });
		document.addEventListener("click", this.hide);
	}

	hide() {
		this.setState({ drpDwnVisible: false });
		document.removeEventListener("click", this.hide);
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return (
			<div className="header-wrapper">
				<header className="navbar navbar-default">
					<div className="logo col-sm-3">Online Shopping</div>
					<div className="search-panel col-sm-6">
						<div className="col-sm-9">
							<input type='search-input' className='form-control' />
						</div>
						<div className="col-sm-3">
							<div className="search-container">
								<a>
									<i className="searchIcon glyphicon glyphicon-search"></i>
									<span>Search</span>
								</a>
							</div>
						</div>
					</div>
					<div className="sub-nav col-sm-3">
						<div className="wrapper">
							<ul className="nav navbar-nav navbar-right">
								<li>
									
								</li>
							</ul>
						</div>
					</div>
				</header>

			</div>
		)
	}
}

Header.propTypes = {

}

function mapStateToProps(state) {
	return {

	}
}

export default connect(mapStateToProps, {

})(Header)