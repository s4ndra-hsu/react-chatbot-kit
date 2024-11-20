// new file calleCatPicture.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

const DogPicture = () => {
  const [imageUrl, setImageUrls] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true on client side
    const fetchImages = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setImageUrls(data);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {isClient && imageUrl ? ( // Conditionally render the Image component
        <Image src={imageUrl.message} key={imageUrl.message} alt="un perro" width={500} height={500} />
      ) : null}
    </div>
  );
};

export default DogPicture;
