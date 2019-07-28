import React, {Component} from "react";
import axios from 'axios';

export default class DeleteTodo extends Component {

	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
		this.state = {todos:[]};
	}

	componentDidMount() {
		axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
			.then(response => {
				this.setState({todos: response.data});
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	componentDidUpdate() {
		axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
			.then(response => {
				this.setState({todos: response.data});
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	onSubmit(e) {
		e.preventDefault();

		const obj = {todos: []};

		axios.post('http://localhost:4000/todos/delete/'+this.props.match.params.id, obj)
			.then(res => console.log(res.data));

		this.props.history.push('/');



	}


	render() {
		return (
			<div>
				<h3>Are you sure you want to delete this todo item?</h3>
			
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<input type="submit" value="Yes" className="btn btn-primary" />

				</div>
			</form>

			</div>

			)
	}


}