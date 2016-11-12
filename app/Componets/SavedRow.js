var React = require('react');

var SavedRow = React.createClass({

	getInitialState:function(){
		return{
			title:"Test title",
			saved_time:"Test time",
			notes:"Test notes"
		}
	},
	//TODO
	//will handle delete
	componentWillUnmount:function(){

	},
	render:function(){
		return(

			<div>
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3>{this.state.title}</h3>
						<p>{this.state.saved_time}</p>
						<button>Delete</button>
					</div>
					<div className="panel-body">
						{this.state.notes}
					</div>
				</div>
			</div>

		)
	}

})

module.exports= SavedRow;