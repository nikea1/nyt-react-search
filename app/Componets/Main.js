var React = require('react')

var Search = require('./Children/Search.js')
var Result = require('./Children/Result.js')
var Saved = require('./Children/Saved.js');

var axios = require('axios');
var moment = require('moment');

var Main = React.createClass({

	getInitialState:function(){
		return {

				query:[],
			
			}
	},

	getQuery:function(queryObject){

		//building url string
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
		var key = "api-key=c1e743b58c9848aea886e2fb1780732e"
		var q = "&q="+queryObject.topic;
		var start = "&begin_date="+moment(queryObject.start).format("YYYYMMDD")
		var end = (queryObject.end != "") ? "&end_date="+moment(queryObject.end).format("YYYYMMDD") : "";
		
		var urlString = url+key+q+start+end;

		console.log(this);
		self = this;
		//run query
		axios.get(urlString)
		.then(function(response){

			var articles = response.data.response.docs;
			var results = [];

			for (var i = 0; i < 5; i++){
				// console.log(articles[i].headline.main);
				// console.log(articles[i].pub_date);
				// console.log(articles[i].web_url);
				results.push({
					title:articles[i].headline.main,
					date:articles[i].pub_date,
					url:articles[i].web_url
				})

			}

			console.log(self);
			self.setState({query:results});
					
		})
	},
	
	

	render:function(){
		return(
			<div>
				<div className="jumbotron">
					<h1>New York Times Article Scrubber</h1>
					<p>It's over isn't...</p>	
				</div>
		
				<Search myfunc={this.getQuery}  />
				<Result />
				<Saved />
			</div>
		)
	}
})

module.exports = Main;