import React, { useContext, useState } from "react";
import estate_data from "../backend/data";
import Card from "../components/Card";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import { GlobalContext } from "../context/GlobalContext";

function Home() {
  const { data, setData } = useContext(GlobalContext);

  const [searchValue, setSearchValue] = useState("");

  // set search value
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  // Search by city/address/type/Area of property
  function handleSearch() {
    let updatedData = estate_data;
    updatedData = updatedData.filter(
      (data) =>
        data.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.address.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.type.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.area.toLowerCase().includes(searchValue.toLowerCase())
    );

    setData(updatedData);
  }

  function handleKey(e) {
    e.code === "Enter" && handleSearch();
  }

  return (
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
          onKeyDown={handleKey}
        />
      </div>

      <FilterBar />

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
        {data.length === 0 && <p>Doesnt exist</p>}
      </section>
    </header>
  );
}

export default Home;
