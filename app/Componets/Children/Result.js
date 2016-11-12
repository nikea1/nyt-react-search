var React = require('react')

var Result = React.createClass({


	render:function(){
		return(
			<div className="panel panel-primary">
				<div className="panel-heading">Result</div>
				<div className="panel-body">
					{this.props.renderResult()}
				</div>
			</div>
		)
	}
})

module.exports= Result