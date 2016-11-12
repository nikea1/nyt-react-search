var React = require('react')

var Search = require('./Children/Search.js')
var Result = require('./Children/Result.js')
var Saved = require('./Children/Saved.js');
var ResultRow = require('./Children/ResultRow.js');
var SavedRow = require('./Children/SavedRow.js');


var axios = require('axios');
var moment = require('moment');

var Main = React.createClass({

	getInitialState:function(){
		return {

				query:[],
				saved:[]
			
			}
	},

	getQuery:function(queryObject){

		//building url string
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
		var key = "api-key=c1e743b58c9848aea886e2fb1780732e"
		var q = (queryObject.topic != "") ? "&q="+queryObject.topic : "";
		var start = (queryObject.start != "") ? "&begin_date="+moment(queryObject.start).format("YYYYMMDD") : "";
		var end = (queryObject.end != "") ? "&end_date="+moment(queryObject.end).format("YYYYMMDD") : "";
		
		var urlString = url+key+q+start+end;

		
		self = this;
		//run query
		axios.get(urlString)
		.then(function(response){

			var articles = response.data.response.docs;
			var results = [];

			for (var i = 0; i < 5; i++){
				
				results.push({
					id:articles[i]._id,
					title:articles[i].headline.main,
					date:articles[i].pub_date,
					url:articles[i].web_url
				})

			}

			self.setState({query:results});
				
		})
	},
	//post saved article
	postArticle:function(data){
		console.log(data);

		//TODO:
		//push data to database here
		var temp = this.state.saved;
		temp.push(data);
		this.setState({saved:temp})
		console.log(this.state.saved)


	},
	//get saved article and create component for it
	getArticle:function(){

	},
	renderResult:function(){
		self = this
		return this.state.query.map(function(data, index){
			return(<ResultRow key={data.id} title={data.title} url={data.url} date={data.date} postArticle={self.postArticle}/>)
		});
		
	},
	render:function(){
		
		return(
			<div>
				<div className="jumbotron">
					<h1>New York Times Article Scrubber</h1>
					<p>It's over isn't...</p>	
				</div>
				
				<Search myfunc={this.getQuery}  />
				
				<Result renderResult={this.renderResult}/>

				<Saved />
			</div>
		)
	}
})

module.exports = Main;