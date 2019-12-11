import React, { Component } from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import "./Restaurant.css";

class Restaurant extends Component {
	render() {
		const { name, votes, handleVotes, handleUnVotes, user } = this.props;
		const userHasSelected = votes && Object.keys(votes).includes(user.uid);
		return (
			<article className="Restaurant">
				<p>
					<span className="font-weight-bold"> {name} </span> is great place to hangout
				</p>
				<ul className="list-group">
					{votes &&
						map(votes, (voter, key) => (
							<li className="list-group-item" key={key}>
								{voter}
							</li>
						))}
				</ul>

				{userHasSelected ? (
					<button onClick={handleUnVotes} className="destructive">
						Nah, nevermind
					</button>
				) : (
					<button onClick={handleVotes}>Yeh, I'd go</button>
				)}
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
