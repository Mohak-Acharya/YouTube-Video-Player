import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { vids: [], currvideo: null };

  componentDidMount() {
    this.ontermsubmit('');
  }

  ontermsubmit = async (term) => {
    // console.log(term);
    const res = await youtube.get('/search', { params: { q: term } });
    // console.log(res);
    this.setState({ vids: res.data.items, currvideo: res.data.items[0] });
  };

  selectedvid = (video) => {
    // console.log('From the App',video);
    this.setState({ currvideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar ontermsubmit={this.ontermsubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.currvideo} />
            </div>
            <div className="five wide column">
              <VideoList
                selectedvid={this.selectedvid}
                vids={this.state.vids}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
