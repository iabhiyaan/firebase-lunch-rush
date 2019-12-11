import React, { Component } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";

import { database } from "./firebase";
import Restaurant from "./Restaurant";
import "./Restaurants.css";

class Restaurants extends Component {
	constructor(props) {
		super(props);
	}
	handleVotes(key) {
		const currentUser = this.props.user;
		database.ref("/restaurants").child(key).child("votes").child(currentUser.uid).set(currentUser.displayName);
	}
	handleUnVotes(key) {
		const currentUser = this.props.user;
		database.ref("/restaurants").child(key).child("votes").child(currentUser.uid).remove();
	}
	render() {
		const { restaurants, user } = this.props;
		return (
			<section className="Restaurants">
				{restaurants &&
					map(restaurants, (restaurant, key) => {
						return (
							<Restaurant
								key={key}
								{...restaurant}
								user={user}
								handleVotes={() => this.handleVotes(key)}
								handleUnVotes={() => this.handleUnVotes(key)}
							/>
						);
					})}
			</section>
		);
	}
}

Restaurants.propTypes = {
	user: PropTypes.object,
	restaurantsRef: PropTypes.object,
	restaurants: PropTypes.object
};

export default Restaurants;
