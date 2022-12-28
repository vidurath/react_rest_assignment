import React from "react";
import SearchBox from "../../components/SearchBox";
import User from "../../components/User";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
      userList: [],
      email: localStorage.getItem("email"),
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => this.setState({ userList: users.data }));
  }

  handleLogout = () => {
    localStorage.removeItem("email");
    window.location.href = "/";
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { userList, searchfield } = this.state;
    const filteredUser = userList.filter(
      (u) => u.id === parseInt(searchfield, 10)
    );
    return (
      <>
        <div className="container">
          <h5 align="right">
            Logged in as{" "}
            <b>
              <u>{this.state.email}</u>
            </b>{" "}
          </h5>
          <p align="right">
            <button className="btn btn-warning" onClick={this.handleLogout}>
              Log Out
            </button>
          </p>
          <br />
          <h1 align="center">Search Page</h1>
          <br />
          <SearchBox searchChange={this.onSearchChange} />
          <br />
          <User chosenUsers={filteredUser} />
        </div>
      </>
    );
  }
}

export default Search;
