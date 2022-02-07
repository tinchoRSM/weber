import React, { useEffect } from "react";

function Shop() {

  useEffect(() => {
    window.location.href = "https://bradva.net/weber-barbecue/";
  }, []);

  return (
    <div className="container h-[600px] flex-1 flex w-full justify-center items-center"> 
      <h1 className="header1-text text-[45px] lg:text-[60px]">Пренасочване към BRADVA.NET </h1>
    </div>
  );
}

export default Shop;