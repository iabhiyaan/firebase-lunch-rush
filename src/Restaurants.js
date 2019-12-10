import React, { Component } from "react";
import PropTypes from "prop-types";

import Restaurant from "./Restaurant";
import map from "lodash/map";
import "./Restaurants.css";

class Restaurants extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { restaurants } = this.props;
		return (
			<section className="Restaurants">
				{restaurants &&
					Object.values(restaurants).map((restaurant, key) => <Restaurant key={key} {...restaurant} />)}
			</section>
		);
	}
}

Restaurants.propTypes = {
	// user: PropTypes,
	restaurantsRef: PropTypes.object,
	restaurants: PropTypes.object
};

export default Restaurants;
