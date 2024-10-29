// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import NewsListContainer from "./containers/NewsListContainer";
import NewsDetailContainer from "./containers/NewsDetailContainer";

export default class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleselectNews = (key) => {
    this.setState({ selectedNewsKey: key });
  };
  handleBack = () => {
    this.setState({ selectedNewsKey: null }); // Kembali ke halaman list dengan mengatur key menjadi null
  };
  render() {
    return (
      <div className="app">
        {this.state.selectedNewsKey ? (
          <NewsDetailContainer
            newskey={this.state.selectedNewsKey}
            onBack={this.handleBack}
          />
        ) : (
          <NewsListContainer onSelect={this.handleselectNews} />
        )}
      </div>
    );
  }
}
