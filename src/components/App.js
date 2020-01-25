import React from 'react';
import FindBar from './FindBar';
import youtube from '../apis/youtube';
import YoutubeVideoList from './YoutubeVideoList';
import YoutubeVideoDetail from './YoutubeVideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    
    this.setState({
    videos: response.data.items,
    selectedVideo: response.data.items[0]
    });
  };
re
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <FindBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <YoutubeVideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <YoutubeVideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;