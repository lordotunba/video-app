
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const  API_KEY = 'AIzaSyBMZBuER_zVMRjhk4XbRCo2a2F4VK2f8ow';




//functional component because it doesn't have any form of state

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos:[],
		    selectedVideo: null,
		    term:''
		};

   this.videoSearch(this.state.term);

	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term:term}, (videos) => {
	     this.setState({
	    	 videos:videos, 
	    	 selectedVideo:videos[0]
	     });  
	 });
	}
  
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},1000);
	    return ( <div> 
		          <SearchBar onSearch={videoSearch} /> 
		          <VideoDetail video={this.state.selectedVideo} />
		          <VideoList 
		           onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
		           videos={this.state.videos} />
		       </div>
		  );
   }
}

ReactDOM.render(<App />,document.querySelector('.container'));