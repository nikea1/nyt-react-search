var React = require('react')

var Result = React.createClass({

	render:function(){
		return(
			<div className="panel panel-primary">
				<div className="panel-heading">Result</div>
				<div className="panel-body">
					Database content here.
					
				</div>
			</div>
		)
	}
})

module.exports= Result