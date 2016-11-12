var React = require('react');

var ResultRow = React.createClass({
	getInitialState:function(){
		return{
			title:this.props.title,
			date:this.props.date,
			url:this.props.url
		}
	},
	handleClick:function(){

		this.props.postArticle(this.state);

	},
	render:function(){


		return(
				<div data-time={this.state.date}>
					<h2 className="title">{this.state.title}</h2>
					<p className="url">{this.state.url}</p>
					<button className="btn btn-danger" onClick={this.handleClick}>Save</button>
				</div>
			)

	}
})

module.exports = ResultRow