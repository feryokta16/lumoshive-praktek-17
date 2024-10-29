// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import NewsList from "../components/NewsList";
// eslint-disable-next-line no-unused-vars
import { fetchGame } from "../utils/api";

export default class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const data = await fetchGame();
      this.setState({ news: data, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  }
  render() {
    const { news, loading } = this.state;
    return (
      <div>
        <h1>List</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          // eslint-disable-next-line react/prop-types
          <NewsList news={news} onSelect={this.props.onSelect} />
        )}
      </div>
    );
  }
}
