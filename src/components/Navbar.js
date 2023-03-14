import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  handleOnChange = (event) => {
    this.props.setCountry(event.target.value,event.target.selectedOptions[0].text);
    this.props.setPageReload(true)
  };
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsCast
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/business" ? "active" : ""
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/entertainment"
                      ? "active"
                      : ""
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/health" ? "active" : ""
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/science" ? "active" : ""
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/sports" ? "active" : ""
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    this.props.pathToHighLight === "/technology" ? "active" : ""
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className="container d-flex justify-content-end bg-dark">
              {/* <label htmlFor="country" className="text-light">Country</label> */}
              <select
                id="country"
                className="form-select-sm"
                defaultValue={"in"}
                onChange={this.handleOnChange}
              >
                <option value="ae">🇦🇪 UAE</option>
                <option value="ar">🇦🇷 Argentina</option>
                <option value="at">🇦🇹 Austria</option>
                <option value="au">🇦🇺 Australia</option>
                <option value="be">🇧🇪 Belgium</option>
                <option value="bg">🇧🇬 Bulgaria</option>
                <option value="br">🇧🇷 Brasil</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="ch">🇨🇭 Switzerland</option>
                <option value="cn">🇨🇳 China</option>
                <option value="co">🇨🇴 Colombia</option>
                <option value="cu">🇨🇺 Cuba</option>
                <option value="cz">🇨🇿 Czechia</option>
                <option value="de">🇩🇪 Germany</option>
                <option value="eg">🇪🇬 Egypt</option>
                <option value="fr">🇫🇷 France</option>
                <option value="gb">🇬🇧 United Kingdom</option>
                <option value="gr">🇬🇷 Greece</option>
                <option value="hk">🇭🇰 Hong Kong</option>
                <option value="hu">🇭🇺 Hungary</option>
                <option value="id">🇮🇩 Indonesia</option>
                <option value="ie">🇮🇪 Ireland</option>
                <option value="il">🇮🇱 Israel</option>
                <option value="in">🇮🇳 India</option>
                <option value="it">🇮🇹 Italy</option>
                <option value="jp">🇯🇵 Japan</option>
                <option value="kr">🇰🇷 South Korea</option>
                <option value="lt">🇱🇹 Lithuania</option>
                <option value="lv">🇱🇻 Latvia</option>
                <option value="ma">🇲🇦 Morocco</option>
                <option value="mx">🇲🇽 Mexico</option>
                <option value="my">🇲🇾 Malaysia</option>
                <option value="ng">🇳🇬 Nigeria</option>
                <option value="nl">🇳🇱 Netherlands</option>
                <option value="no">🇳🇴 Norway</option>
                <option value="nz">🇳🇿 New Zealand</option>
                <option value="ph">🇵🇭 Philippines</option>
                <option value="pl">🇵🇱 Poland</option>
                <option value="pt">🇵🇹 Portugal</option>
                <option value="ro">🇷🇴 România</option>
                <option value="rs">🇷🇸 Serbia</option>
                <option value="ru">🇷🇺 Russia</option>
                <option value="sa">🇸🇦 Saudi Arabia</option>
                <option value="se">🇸🇪 Sweden</option>
                <option value="sg">🇸🇬 Singapore</option>
                <option value="si">🇸🇮 Slovenia</option>
                <option value="sk">🇸🇰 Slovakia</option>
                <option value="th">🇹🇭 Thailand</option>
                <option value="tr">🇹🇷 Türkey</option>
                <option value="tw">🇹🇼 Taiwan</option>
                <option value="ua">🇺🇦 Ukraine </option>
                <option value="us">🇺🇸 USA </option>
                <option value="ve">🇻🇪 Venezuela </option>
                <option value="za">🇿🇦 South Africa </option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
