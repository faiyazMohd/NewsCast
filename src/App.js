import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey1 = process.env.REACT_APP_NEWS_API_1;
  apiKey2 = process.env.REACT_APP_NEWS_API_2;
  apiKey3 = process.env.REACT_APP_NEWS_API_3;
  apiKey4 = process.env.REACT_APP_NEWS_API_4;
  pageSize = 15;

  state = {
    progress: 0,
    pathToHighLight: "/",
    countryCode: "in",
    countryName:"🇮🇳 India",
    pageReload:false
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  setPathToHighLight = (path) => {
    this.setState({ pathToHighLight: path });
  };
  setCountry = (countryCode, countryName) => {
    this.setState({
      countryCode: countryCode,
      countryName:countryName
      });
  };

  setPageReload = (value)=>{
    this.setState({
      pageReload:value
    })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar
            pathToHighLight={this.state.pathToHighLight}
            setCountry={this.setCountry}
            setPageReload={this.setPageReload}
          />
          {/* <LoadingBar color="#f11946" progress={this.state.progress} /> */}
          {/* <LoadingBar color="#fffcfd" progress={this.state.progress} /> */}
          <LoadingBar color="#d9c9f0" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`NewsCast ${(this.state.countryName)}: - Top Headlines`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="general"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Business`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="business"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Entertainment`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="entertainment"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Health`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="health"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Science`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="science"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Sports`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="sports"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Technology`}
                  pageSize={this.pageSize}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="technology"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
