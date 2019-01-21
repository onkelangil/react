import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DetailedDish extends Component {

	constructor(props) {
		super(props);
		console.log(this.props)
		this.state = {
			dish: this.props.dish
		}
	}

	renderComments(comments) {

		
		const listComments = comments.map((comment) =>
			
			<div key={comment.id}>
				
				<li>{comment.comment}</li>
				<br></br>
				<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
					year: 'numeric',
					month: 'long',
					day: '2-digit'
				}).format(new Date(comment.date))}</li>
				<br></br>
			</div>
		);
		return (
			<div>
				<h4>Comments</h4>
				<ul className="list-unstyled">{listComments}</ul>
			</div>
		);

	}

	renderDish(dish) {

		
		if (dish != null)
			return (
				<Card>
					<CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
					<CardBody>
						<CardTitle>{this.props.dish.name}</CardTitle>
						<CardText>{this.props.dish.description}</CardText>
					</CardBody>
				</Card>
			);
		else
			return (
				<div></div>
			);

	}

	render() {
		
		
		if (this.props.dish != null)
			return (
				
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.props.dish)}
						
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(this.props.dish.comments)}
					</div>
				</div>
			);
		else
			return (
				<div></div>
			);
		
	}
}
export default DetailedDish;