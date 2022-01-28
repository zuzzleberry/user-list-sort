import logo from "./logo.svg";
import "./App.css";

import React from "react";

import MOCK_DATA from "./data/MOCK_DATA.json";

const App = () => {
  const [userData, setUserData] = React.useState(MOCK_DATA);
  const [searchText, setSearchText] = React.useState("");
  const [sortAscending, setSortAscending] = React.useState(true)

  React.useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const FilterByText = (e) => {
    setSearchText(e.target.value);
  };

  const SortAlpha = () => {
    
    const sortUsers = [...userData];
    sortUsers.sort((a, b) => {
      if (a.first_name < b.first_name) {
        return (sortAscending ? -1 : 1)
      } else if (a.first_name > b.first_name) {
        return (sortAscending ? 1 : -1)
      }
    })
    console.log("Sorting!")
    setUserData(sortUsers)
    setSortAscending(!sortAscending)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={searchText} onChange={FilterByText}></input>
        
      </header>
      <div className="data-display">
        <ul className="data-headings">
          <li>ID</li>
          <li>First Name<button onClick={SortAlpha}>D</button></li>
          <li>Last Name</li>
          <li>Gender</li>
        </ul>
        <ul>
          {userData
            .filter((f) => f.first_name.toLowerCase().includes(searchText.toLowerCase()))
            
            .map((user, index) => (
              <li className="user-card" key={user.id}>
                <p>{user.id}</p>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.gender}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
