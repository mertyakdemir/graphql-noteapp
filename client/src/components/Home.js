import React, {Component} from 'react';

import { Query, Mutation } from 'react-apollo';
import { GET_TEXT, ADD_TEXT } from '../queries';


class Home extends Component {

	state = {
		text: '',
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (e, addText) => {
		e.preventDefault();
		addText().then(data =>{
		})
	}

	render() {
		return (
			<div>
				<Mutation mutation={ADD_TEXT} variables={{...this.state}} refetchQueries={[{ query: GET_TEXT}]}>
                 {
					 (addText, {loading, error }) => (
						<form id="form1" onSubmit={e => {
							this.onSubmit(e, addText);
						}}>
						<h1>Text</h1>
						 <input id="text" onChange={this.onChange} name="text" placeholder="Text..." />
						 <button type="submit">Submit</button>
					   </form>
					 )
				 }				
				</Mutation>
			<Query query={GET_TEXT}>
			  {
			  ({ loading, error, data }) => {
				if (loading) return <div>Loading</div>;				
				if (error) return <div>Error</div>;				
				console.log(data)
				return (
					<div>
						<ul>
				    	{
						data.reflects.map(reflect => (
							<li key={reflect.id}>
								<strong>ID: {reflect.id} - <span style={{color: "green"}}>{reflect.text}</span> </strong>
							</li>
				        ))
					    }
				        </ul>
						<h3>Text count: {data.reflects.length}</h3>
					</div>
				
				)
			  }}
			</Query>
			</div>
		  );
	}
}

export default Home;