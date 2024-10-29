// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { fetchGameDetail } from "../utils/api";
import NewsDetail from "../components/NewsDetail";

export default class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };
  componentDidMount() {
    this.fetchGameData();
  }

  async fetchGameData() {
    try {
      // eslint-disable-next-line react/prop-types
      const data = await fetchGameDetail(this.props.newskey);
      this.setState({ detail: data.results, loading: false });
      console.log(data);
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  }
  render() {
    return (
      <div>
        <h1>Detail</h1>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          // eslint-disable-next-line react/prop-types
          <NewsDetail detail={this.state.detail} onBack={this.props.onBack} />
        )}
      </div>
    );
  }
}
