import "./App.css";
import Card from "./components/Card";
import estate_data from "./backend/data";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState(estate_data);
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState("Choose");

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "location") {
      setLocation(value);
    }
  }

  function handleSearch() {
    console.log(location);
    const newData = data.filter((data) =>
      data.city
        .toLowerCase()
        .replaceAll(" ", "")
        .includes(location.toLowerCase())
    );
    setData(newData);
    location === "" && setData(estate_data);
    setLocation("");
  }

  function handleSelect(e) {
    setSelected(e.target.value);
  }

  return (
    <div className="App">
      <header className="container max-w-screen-xl mx-auto py-8 px-8">
        <div className="lg:flex mb-8">
          <h1 className="text-5xl font-black text-dark_purple mr-auto mb-4 lg:mb-0 ">
            Search properties to rent
          </h1>
          <SearchBar
            onChange={handleChange}
            name={"searchbar"}
            value={searchValue}
            setValue={setSearchValue}
          />
        </div>
        <div className="p-8 bg-white rounded mb-8 flex justify-between">
          <div>
            <p>Location</p>
            <input
              placeholder="eg. New York"
              name={"location"}
              value={location}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>When</p>
            <input placeholder="eg. Nework" />
          </div>
          <div>
            <p>Price</p>
            <input placeholder="eg. Nework" />
          </div>
          <div>
            <p>Property Type</p>
            <select onChange={handleSelect}>
              <option>{selected}</option>
              <option>Duplex</option>
              <option>Condo</option>
              <option>Single Family</option>
              <option>Townhouse</option>
              <option>Studio</option>
              <option>Multi Family</option>
            </select>
          </div>
          <button
            className="bg-purple px-5 rounded text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
          {data.map((est) => (
            <Card
              key={est.id}
              name={est.city}
              price={est.price}
              address={est.address}
              image={est.image}
              beds={est.beds}
              baths={est.baths}
            />
          ))}
        </section>
      </header>
    </div>
  );
}

export default App;
