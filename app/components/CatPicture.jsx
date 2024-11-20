// new file calleCatPicture.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

const CatPicture = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data[0].url);
      });
  }, []);

  return (
    <div>
      {imageUrl ? ( // Conditionally render the Image component
        <Image src={imageUrl} key={"img-" + imageUrl.id} alt="un gato" width={500} height={500} />
      ) : null}
    </div>
  );
};

export default CatPicture;
