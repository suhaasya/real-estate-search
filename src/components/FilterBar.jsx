import React, { useContext, useState } from "react";
import estate_data from "../backend/data";
import { AiOutlineDown } from "react-icons/ai";
import { GlobalContext } from "../context/GlobalContext";

function FilterBar() {
  const { setData } = useContext(GlobalContext);

  const [filterData, setFilterData] = useState({
    location: "",
    propertyType: "",
    minPrice: 1000,
    maxPrice: 10000,
    moveDate: "",
  });

  const [showMenu, setShowMenu] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilterData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSearch() {
    let updatedData = estate_data;

    // Location Filter
    if (filterData.location) {
      updatedData = updatedData.filter((data) =>
        data.city.toLowerCase().includes(filterData.location.toLowerCase())
      );
    }

    // Property Type Filter
    if (
      filterData.propertyType !== "" &&
      filterData.propertyType !== "Choose"
    ) {
      updatedData = updatedData.filter(
        (data) => data.type === filterData.propertyType
      );
    }

    // Price filter
    updatedData = updatedData.filter(
      (data) =>
        data.price >= parseInt(filterData.minPrice) &&
        data.price <= parseInt(filterData.maxPrice)
    );

    // date filter
    if (filterData.moveDate) {
      updatedData = updatedData.filter((data) => {
        const userDate = new Date(filterData.moveDate);
        const startDate = new Date(data.startDate);
        return startDate < userDate;
      });
    }

    setData(updatedData);
    setShowMenu(false);
    setFilterData({
      location: "",
      propertyType: "",
      minPrice: 1000,
      maxPrice: 10000,
      moveDate: "",
    });
  }

  return (
    <div className="p-8 bg-white rounded mb-8 flex justify-between">
      <div>
        <p>Location</p>
        <input
          placeholder="eg. New York"
          name={"location"}
          value={filterData.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>When</p>
        <input
          placeholder="Move in Date"
          type={"date"}
          name="moveDate"
          onChange={handleChange}
          value={filterData.moveDate}
        />
      </div>
      <div className="">
        <p>Price</p>
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <p className="mr-8">Choose</p>
          <AiOutlineDown />
        </div>
        <div className={!showMenu && "hidden relative"}>
          <div className="absolute bg-white border-solid border p-4 rounded">
            <div>
              <label>Min Value</label>
              <div className="flex items-center gap-2">
                <input
                  type={"range"}
                  min="1000"
                  max="10000"
                  name="minPrice"
                  value={filterData.minPrice}
                  onChange={handleChange}
                ></input>

                <span>${filterData.minPrice}</span>
              </div>
            </div>

            <div>
              <label>Max Value</label>
              <div className="flex items-center gap-2">
                <input
                  type={"range"}
                  min="1000"
                  max="10000"
                  name="maxPrice"
                  value={filterData.maxPrice}
                  onChange={handleChange}
                ></input>
                <span>${filterData.maxPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Property Type</p>
        <select
          name={"propertyType"}
          onChange={handleChange}
          value={filterData.propertyType}
        >
          <option>Choose</option>
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
  );
}

export default FilterBar;
