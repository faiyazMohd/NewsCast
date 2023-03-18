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
  setCountry = (countryCode, countryName,countryLang) => {
    this.setState({
      countryCode: countryCode,
      countryName:countryName,
      countryLang:countryLang
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
                  key="top"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`NewsCast ${(this.state.countryName)}: - Top Headlines`}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="top"
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
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="technology"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
          <Route
              exact
              path="/environment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="environment"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Environment`}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="environment"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
          <Route
              exact
              path="/food"
              element={
                <News
                  setProgress={this.setProgress}
                  key="food"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Food`}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="food"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
          <Route
              exact
              path="/politics"
              element={
                <News
                  setProgress={this.setProgress}
                  key="politics"
                  setPathToHighLight={this.setPathToHighLight}
                  title={`${this.state.countryName}  :  Top Headlines - Politics`}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="politics"
                  apiKey={this.apiKey4}
                  pageReload={this.state.pageReload}
                  setPageReload={this.setPageReload}
                />
              }
            />
          <Route
              exact
              path="/world"
              element={
                <News
                  setProgress={this.setProgress}
                  key="world"
                  setPathToHighLight={this.setPathToHighLight}
                  title={` ${this.state.countryName}  :   Top Headlines - 🌎 World`}
                  countryCode={this.state.countryCode}
                  countryName={this.state.countryName}
                  category="world"
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
