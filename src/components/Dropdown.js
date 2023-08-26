// import { useMemo } from "react";
// import "./Dropdown.css";
// const Dropdown = ({
//   dopdown,
//   dropdownPosition,
//   dropdownTop,
//   dropdownLeft,
//   dropdownBorder,
//   dropdownBoxSizing,
// }) => {
//   const dropdownStyle = useMemo(() => {
//     return {
//       position: dropdownPosition,
//       top: dropdownTop,
//       left: dropdownLeft,
//       border: dropdownBorder,
//       boxSizing: dropdownBoxSizing,
//     };
//   }, [
//     dropdownPosition,
//     dropdownTop,
//     dropdownLeft,
//     dropdownBorder,
//     dropdownBoxSizing,
//   ]);

//   return (
//     <div className="dropdown" style={dropdownStyle}>
//       <div className="dopdown">{dopdown}</div>
//       <div className="product-1">PRODUCT 1</div>
//       <div className="product-2">PRODUCT 2</div>
//       <div className="product-3">PRODUCT 3</div>
//       <div className="product-4">PRODUCT 4</div>
//       <div className="dropdown-child" />
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState, useEffect } from "react";


import React, { useState, useEffect, useMemo } from "react";
import "./Dropdown.css";

const Dropdown = ({
  dropdownPosition,
  dropdownTop,
  dropdownLeft,
  dropdownBorder,
  dropdownBoxSizing,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fakeApiCall = () => {
      setTimeout(() => {
        const apiResponse = [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ];
        setProducts(apiResponse);
      }, 1000);
    };

    fakeApiCall();
  }, []);

  const dropdownStyle = useMemo(() => {
    return {
      position: dropdownPosition,
      top: dropdownTop,
      left: dropdownLeft,
      border: dropdownBorder,
      boxSizing: dropdownBoxSizing,
    };
  }, [
    dropdownPosition,
    dropdownTop,
    dropdownLeft,
    dropdownBorder,
    dropdownBoxSizing,
  ]);

  return (
    <div className="dropdown" style={dropdownStyle}>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={() => {
              console.log("Clicked product:", product.name);
              // You can make the API call here
            }}
          >
            {product.name}
          </div>
        ))}
      </div>
      <div className="dropdown-child" />
    </div>
  );
};

export default Dropdown;



// import React, { useState, useEffect, useMemo } from "react";
// import "./Dropdown.css";

// const Dropdown = ({
//   dropdownPosition,
//   dropdownTop,
//   dropdownLeft,
//   dropdownBorder,
//   dropdownBoxSizing,
// }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   const dropdownStyle = useMemo(() => {
//     return {
//       position: dropdownPosition,
//       top: dropdownTop,
//       left: dropdownLeft,
//       border: dropdownBorder,
//       boxSizing: dropdownBoxSizing,
//     };
//   }, [
//     dropdownPosition,
//     dropdownTop,
//     dropdownLeft,
//     dropdownBorder,
//     dropdownBoxSizing,
//   ]);

//   return (
//     <div className="dropdown" style={dropdownStyle}>
//       <div className="product-list">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="product"
//             onClick={() => {
//               console.log("Clicked product:", product.title);
//               // You can make the API call here
//             }}
//           >
//             {product.title}
//           </div>
//         ))}
//       </div>
//       <div className="dropdown-child" />
//     </div>
//   );
// };

// export default Dropdown;
