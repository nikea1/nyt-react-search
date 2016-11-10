var React = require('react')

var Search = React.createClass({

	getInitialState:function(){
		return{
			topic:"",
			start:"",
			end:""
		}
	},
	handleChange:function(event){
		var newState = {}
		newState[event.target.id] = event.target.value
		this.setState(newState);

	},
	handleClick:function(){
		
		this.props.myfunc(this.state);
		return false;
	},
	render:function(){
		return(
			
			<div className="panel panel-primary">
				<div className="panel-heading">Search</div>
				<div className="panel-body">
					<form>
						<div className="form-group">
							<label>Topic</label>
							<input type="text" id="topic" className="form-control" 
									value={this.state.topic} onChange={this.handleChange} required />

							<label>Start Year</label>
							<input type="date" id="start" className="form-control" 
									value={this.state.start} onChange={this.handleChange} required />
								
							<label>End Year</label>
							<input type="date" id="end" className="form-control"  
									value={this.state.end} onChange={this.handleChange} />
							
							<br />
							<div id="buttonholder" className="text-center">
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
							</div>
							
						</div>
					</form>
					
				</div>
				
			</div>

		)//end of render
	}
})

module.exports = Search;