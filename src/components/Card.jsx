import React from "react";

import {
  MdOutlineBedroomChild,
  MdOutlineBathroom,
  MdOutlinePhotoSizeSelectSmall,
} from "react-icons/md";
import HeartButton from "./HeartButton";

function Card({ name, price, address, beds, baths, size, image }) {
  return (
    <div className="rounded hover:cursor-pointer">
      <div className="rounded-t">
        <img src={image} alt="" className="rounded-t h-48 w-full" />
      </div>
      <div className="p-4 bg-white rounded-b">
        <div>
          <div className="flex items-center ">
            <p className="">
              <span className="text-2xl font-semibold text-purple">
                ${price}
              </span>
              <span className="text-gray">/month</span>
            </p>
            <HeartButton />
          </div>
          <p className="text-2xl font-semibold text-dark_purple">{name}</p>
          <p className="text-gray">{address}</p>
        </div>
        <div className="flex justify-between border-solid border-t pt-2 mt-2 border-gray text-purple">
          <div className="flex items-center gap-1">
            <MdOutlineBedroomChild />
            <span className="text-gray">{beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineBathroom />
            <span className="text-gray">{baths} bathrooms</span>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlinePhotoSizeSelectSmall />
            <span className="text-gray">
              {size} m<sup>2</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  name: "Palm Harbor",
  price: 2588,
  address: "2699, Green Valley, Highland Lake, FL",
  beds: 3,
  baths: 2,
  size: "5x7",
  image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
};

export default Card;
