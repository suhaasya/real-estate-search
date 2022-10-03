import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
function HeartButton() {
  const [like, setLike] = useState(false);

  return (
    <button
      className="ml-auto p-1 rounded-full border-solid border border-gray text-purple"
      onClick={() => setLike((prev) => !prev)}
    >
      {like ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}

export default HeartButton;
