import React from "react";
import "./UserCardBlock.css";

function UserCardBlock(props) {
  const renderCartImage = (img) => {
    if (img.length > 0) {
      let image = img[0];
      return `http://localhost:5000/${image}`;
    }
  };
  const renderItems = () => {
    props.products &&
      props.products.map((product) => (
        <tr>
          <td>
            <ima
              style={{ width: "70px" }}
              alt="product"
              src={renderCartImage(product.images)}
            />
          </td>
        </tr>
      ));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Product from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;