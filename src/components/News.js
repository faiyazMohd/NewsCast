import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: "general",
    title: "NewsCast : 🇮🇳 India - Top Headlines",
    countryCode:"in",
    countryName:"🇮🇳 India"
  };
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    if (this.props.category === "general") {
      this.props.setPathToHighLight("/");
    } else {
      this.props.setPathToHighLight("/" + this.props.category);
    }
    document.title = `NewsCast - ${(this.props.countryName).slice(5)} - ${
      this.props.category === "general"
        ? "Get your daily dose of news for free!"
        : this.capitalize(this.props.category)
    }`;
  }

  async updatePage() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updatePage();
  }
  async componentDidUpdate() {
    if (this.props.pageReload) {
      this.updatePage();
      this.props.setPageReload(false)
    }
  }
  

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.countryCode
    // }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });

    //one way of doing writing await waits for state to change
    // await this.setState({
    //   page: this.state.page - 1,
    // });
    // this.updatePage();

    //another way of doing
    this.setState(
      {
        page: this.state.page - 1,
      },
      this.updatePage
    );
  };
  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      //another way of doing
      this.setState(
        {
          page: this.state.page + 1,
        },
        this.updatePage
      );
    }
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.countryCode
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      document.getElementById("newsContainer").innerHTML +=
        "No More Results Found!!";
    }
  };
  render() {
    return (
      <>
        <div className="container my-3 text-center">
          <h1 className="text-center" style={{marginTop: "80px"}}>{this.props.title}</h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container text-center" id="newsContainer">
              <div className="row ">
                {this.state.articles.map((element, index) => {
                  return (
                    <div className="col-md-4 my-4" key={element.url + index}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        date={new Date(element.publishedAt)}
                        description={
                          element.description
                            ? element.description.slice(0, 100)
                            : ""
                        }
                        imageUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : `https://source.unsplash.com/400x300/?${this.props.category}`
                        }
                        newsUrl={element.url}
                        author={element.author}
                        name={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark px-4"
            onClick={this.handleNextClick}
            >
            Next &rarr;
          </button>
        </div> */}
        </div>
      </>
    );
  }
}
