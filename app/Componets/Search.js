var React = require('react')

var Search = React.createClass({

	render:function(){
		return(
			
			<div className="panel panel-primary">
				<div className="panel-heading">Search</div>
				<div className="panel-body">
					<form>
						<div className="form-group">
							<label>Topic</label>
							<input className="form-control" type="text" />

							<label>Start Year</label>
							<input className="form-control" type="date" />
								
							<label>End Year</label>
							<input className="form-control" type="date" />
							<br />
							<div id="buttonholder" className="text-center">
							<input className="btn btn-primary" type="submit" />
							</div>
						</div>
					</form>
				</div>
				
			</div>

		)//end of render
	}
})

module.exports = Search;