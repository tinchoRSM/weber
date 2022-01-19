import React, { useEffect } from "react";

function Shop() {

  useEffect(() => {
    window.location.href = "https://bradva.net/weber-barbecue/";
  }, []);

  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
}

export default Shop;