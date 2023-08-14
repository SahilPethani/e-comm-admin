import React, { useState } from "react";
import product1 from "../../../assets/plv1527-Brown-thumb.png";
import product2 from "../../../assets/plv2996-Purple-thumb.png";
const product = [
  {
    image: product1,
    productname: "Nike revolution 5",
    price: "$300.00",
    SKU: "10",
    Qty: "20",
    Status: "",
  },
  {
    image: product2,
    productname: "puma revolution 5",
    price: "$255.00",
    SKU: "NJC44203-Brown-M",
    Qty: "999",
    Status: "success",
  },
];

const Product = () => {
  const [searchFilters, setSearchFilters] = useState({
    searchProduct: "",
    status: "",
    include_in_menu: "",
    count: 10,
    page: "",
    totalPages: "",
    totalCount: "",
  });
  const handleTaxSearch = (event) => {
    const { value } = event.target;
    setSearchFilters((prev) => ({
      ...prev,
      searchProduct: value,
    }));
  };
  return (
    <>
      <div className="page-heading-2 flex justify-between items-center">
        <div className="flex justify-start space-x-1 items-center">
          <div className="self-center">
            <h1 className="page-heading-title">Products</h1>
          </div>
        </div>
        <div className="flex justify-end space-x-1 items-center">
          <a href="/admin/products/new" className="button primary">
            <span>New Product</span>
          </a>
        </div>
      </div>
      <div className="card shadow">
        <table className="listing sticky">
          <thead>
            <tr>
              <th className="align-bottom">
                <div className="form-field-container null">
                  <div className="field-wrapper radio-field">
                    <label>
                      <input type="checkbox" defaultValue={0} />
                      <span className="checkbox-unchecked" />
                      <span className="pl-05" />
                    </label>
                  </div>
                </div>
              </th>
              <th className="column">
                <div className="table-header id-header">
                  <div className="title">
                    <span />
                  </div>
                </div>
              </th>
              <th className="column">
                <div className="table-header id-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Product Name</span>
                  </div>
                  <div className="filter" style={{ width: "15rem" }}>
                    <div className="form-field-container null">
                      <div className="field-wrapper flex flex-grow">
                        <input
                          type="text"
                          placeholder="Product Name"
                          defaultValue=""
                          onChange={handleTaxSearch}
                          value={searchFilters.searchProduct}
                        />
                        <div className="field-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th>
                <div className="table-header price-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Price</span>
                  </div>
                  <div className="flex space-x-1">
                    <div style={{ width: "6rem" }}>
                      <div className="form-field-container null">
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            placeholder="From"
                            defaultValue=""
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                    <div style={{ width: "6rem" }}>
                      <div className="form-field-container null">
                        <div className="field-wrapper flex flex-grow">
                          <input type="text" placeholder="To" defaultValue="" />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th className="column">
                <div className="table-header id-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>SKU</span>
                  </div>
                  <div className="filter" style={{ width: "15rem" }}>
                    <div className="form-field-container null">
                      <div className="field-wrapper flex flex-grow">
                        <input type="text" placeholder="SKU" defaultValue="" />
                        <div className="field-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th className="column">
                <div className="table-header id-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Qty</span>
                  </div>
                  <div className="filter" style={{ width: "15rem" }}>
                    <div className="form-field-container null">
                      <div className="field-wrapper flex flex-grow">
                        <input type="text" placeholder="Qty" defaultValue="" />
                        <div className="field-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <th className="column">
                <div className="table-header status-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Status</span>
                  </div>
                  <div className="filter">
                    <div className="form-field-container dropdown null">
                      <div className="field-wrapper flex flex-grow items-baseline">
                        <select className="form-field">
                          <option selected="" value="" disabled="">
                            Please select
                          </option>
                          <option value="all">All</option>
                          <option value={1}>Enabled</option>
                          <option value={0}>Disabled</option>
                        </select>
                        <div className="field-border" />
                        <div className="field-suffix">
                          <svg
                            viewBox="0 0 20 20"
                            width="1rem"
                            height="1.25rem"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {product
              .filter((productdata) =>
                productdata.productname
                  .toLowerCase()
                  .includes(searchFilters.searchProduct.toLowerCase())
              )
              .map((productdata, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="form-field-container null">
                        <div className="field-wrapper radio-field">
                          <label>
                            <input type="checkbox" defaultValue={0} />
                            <span className="checkbox-unchecked" />
                            <span className="pl-05" />
                          </label>
                        </div>
                      </div>
                    </td>
                    <>
                      <td>
                        <div
                          className="grid-thumbnail text-border border border-divider p-075 rounded flex justify-center"
                          style={{ width: "6rem", height: "6rem" }}
                        >
                          <img
                            className="self-center"
                            src={productdata.image}
                            alt={productdata.productname}
                          />
                        </div>
                      </td>
                      <td>
                        <div>
                          <a
                            className="hover:underline font-semibold"
                            href="/admin/products/edit/ccdb1b30-13f1-4d0f-a8a9-51ccf9e4ebd9"
                          >
                            {productdata.productname}
                          </a>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>{productdata.price}</span>
                        </div>
                      </td>
                      <td>{productdata.SKU}</td>
                      <td>
                        <div>
                          <span>{productdata.Qty}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <span
                            className={`${
                              productdata.Status === "success"
                                ? "success"
                                : "default"
                            }  dot`}
                            style={{ width: "1.2rem", height: "1.2rem" }}
                          />
                        </div>
                      </td>
                    </>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pagination flex px-2">
          <div className="flex justify-between w-full space-x-1 mt-1 mb-1">
            <div className="flex space-x-1">
              <div className="self-center">
                <span>Show</span>
              </div>
              <div className="limit">
                <div className="" style={{ width: "5rem" }}>
                  <div className="form-field-container null">
                    <div className="field-wrapper flex flex-grow">
                      <input type="text" defaultValue="" />
                      <div className="field-border" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-center">
                <span>per page</span>
              </div>
            </div>
            <div className="flex space-x-1">
              <div className="first self-center">
                <a href="#">1</a>
              </div>
              <div className="current" style={{ width: "5rem" }}>
                <div className="form-field-container null">
                  <div className="field-wrapper flex flex-grow">
                    <input type="text" defaultValue="" />
                    <div className="field-border" />
                  </div>
                </div>
              </div>
              <div className="last self-center">
                <a href="#">10</a>
              </div>
              <div className="next self-center">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <div className="self-center">
                <span>186{/* */} records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
