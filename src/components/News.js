import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    category: "top",
    title: "NewsCast : 🇮🇳 India - Top Headlines",
    countryCode:"in",
    countryName:"🇮🇳 India"
  };
  static propTypes = {
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
      nextPage:""
    };
    if (this.props.category === "top") {
      this.props.setPathToHighLight("/");
    } else {
      this.props.setPathToHighLight("/" + this.props.category);
    }
    document.title = `NewsCast - ${(this.props.countryName).slice(5)} - ${
      this.props.category === "top"
        ? "Get your daily dose of news for free!"
        : this.capitalize(this.props.category)
    }`;
  }

  async updatePage() {
    this.props.setProgress(20);
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=${this.props.countryCode}&category=${this.props.category}`
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.results,
      totalResults: parsedData.totalResults,
      loading: false,
      nextPage:parsedData.nextPage
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updatePage();
    // if (this.state.totalResults === 0) {
    //   document.getElementById("mainContainer").innerHTML =
    //     "No Results Found!!";
    // }
  }
  async componentDidUpdate() {
    if (this.props.pageReload) {
      this.updatePage();
      this.props.setPageReload(false)
    }
  }
  


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=${this.props.countryCode}&category=${this.props.category}&page=${this.state.nextPage}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.results),
      totalResults: parsedData.totalResults,
      nextPage:parsedData.nextPage
    });
    console.log(this.state.articles);
    // if (
    //   (this.state.page  >
    //   Math.ceil(this.state.totalResults / 10 ) || (this.state.nextPage === null))
    // ) {
    //   console.log(this.state.nextPage);
    //   document.getElementById("newsContainer").innerHTML +=
    //     "No More Results Found!!";
    // }
   
  };
  render() {
    return (
      <>
        <div className="container my-3 text-center" >
          <h1 className="text-center" style={{marginTop: "80px"}}>{this.props.title}</h1>
          {this.state.loading && <Spinner />}
          <div id="mainContainer " className="my-4"><h3>{this.state.totalResults === 0 && this.state.nextPage === null?"No Results Found!!":""}</h3></div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.nextPage}
            loader={<Spinner />}
          >
            <div className="container text-center" id="newsContainer">
              <div className="row ">
                {this.state.articles.map((element, index) => {
                  return (
                    <div className="col-md-4 my-4" key={element.link + index}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        date={new Date(element.pubDate)}
                        description={
                          element.description
                            ? element.description.slice(0, 100)
                            : ""
                        }
                        imageUrl={
                          element.image_url
                            ? element.image_url
                            : `https://source.unsplash.com/400x300/?${this.props.category}`
                        }
                        newsUrl={element.link}
                        name={element.source_id}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="my-3"><h4>{this.state.totalResults > 0  && this.state.nextPage === null ?"No More Results Found!!":""}</h4></div>
              
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
