import React, { Component } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import "./Restaurant.css";

class Restaurant extends Component {
	render() {
		const { name } = this.props;
		return (
			<article className="Restaurant">
				<span className="font-weight-bold"> {name} </span> is great place ho hangout
			</article>
		);
	}
}

Restaurant.propTypes = {
	name: PropTypes.string,
	votes: PropTypes.object,
	user: PropTypes.object,
	handleSelect: PropTypes.func,
	handleDeselect: PropTypes.func
};

export default Restaurant;
