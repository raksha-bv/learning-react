import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Like = () => {
  const [liked, setLike] = useState(false);
  return (
    <AiFillHeart
      onClick={() => setLike(!liked)}
      color={liked ? "red" : "gray"}
    />
  );
};

export default Like;
