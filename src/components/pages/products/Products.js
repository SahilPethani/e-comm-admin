import React, { useCallback, useEffect, useState } from "react";
import { fetchList } from "../../apis/services/CommonApiService";
import { ApiEndPoints } from "../../apis/ApiEndPoints";

const Product = () => {

  const [productList, setProductList] = useState([])
  const [checked, setChecked] = useState(0);
  const [selected, setSelected] = useState([]);

  const [searchFilters, setSearchFilters] = useState({
    searchText: "",
    status: "",
    sku: "",
    quantity: "",
    minPrice: "",
    maxPrice: "",
    count: 10,
    page: "",
    totalPages: "",
    totalCount: "",
  });

  useEffect(() => {
    const data = productList.filter((item) => item.select === 1);
    setSelected(data);
    if (data.length === productList.length) {
      setChecked(1);
    } else {
      setChecked(0);
    }
  }, [productList, checked]);

  const getProductList = useCallback(async () => {
    const result = await fetchList(
      ApiEndPoints.GET_PRODUCT_SELLER +
      `?page=${searchFilters.page}&searchText=${searchFilters.searchText}&minPrice=${searchFilters.minPrice}&maxPrice=${searchFilters.maxPrice}&count=${searchFilters.count}&status=${searchFilters.status}&quantity=${searchFilters.quantity}&sku=${searchFilters.sku}`
    );
    if (result?.status === 200) {
      const list = [];
      for (var j in result.data) {
        list.push({
          name: result.data[j].name,
          status: result.data[j].status,
          images: result.data[j].images[0].url,
          price: result.data[j].price,
          sku: result.data[j].sku,
          quantity: result.data[j].quantity,
          id: result.data[j]._id,
          select: 0,
        });
      }
      setProductList(list)
      setSearchFilters((option) => ({
        ...option,
        totalPages: result.totalPages,
        page: result.currentPage,
        totalCount: result.totalProductsCount,
      }));
    } else {
      setProductList([])
    }
  }, [
    searchFilters.page,
    searchFilters.status,
    searchFilters.count,
    searchFilters.searchText,
    searchFilters.sku,
    searchFilters.minPrice,
    searchFilters.maxPrice,
    searchFilters.quantity,
  ]);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const handleTaxSearch = (event) => {
    const { value } = event.target;
    setSearchFilters((prev) => ({
      ...prev,
      searchText: value,
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
                      <input
                        type="checkbox"
                        value={checked}
                        checked={checked === 1 ? true : false}
                        onChange={(e) => {
                          productList.forEach((elements, index) => {
                            productList[index].select =
                              e.target.checked === true ? 1 : 0;
                          });
                          setChecked(e.target.checked === true ? 1 : 0);
                        }}
                      />
                      <span className="checkbox-checked">
                        {checked !== 0 && (
                          <svg
                            viewBox="0 0 20 20"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                          </svg>
                        )}
                      </span>
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
                            onChange={(e) => {
                              setSearchFilters((option) => ({
                                ...option,
                                minPrice: e.target.value,
                              }));
                            }}
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                    <div style={{ width: "6rem" }}>
                      <div className="form-field-container null">
                        <div className="field-wrapper flex flex-grow">
                          <input type="text" placeholder="To" defaultValue="" onChange={(e) => {
                            setSearchFilters((option) => ({
                              ...option,
                              maxPrice: e.target.value,
                            }));
                          }} />
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
                        <input
                          type="text"
                          placeholder="SKU"
                          onChange={(e) => {
                            setSearchFilters((option) => ({
                              ...option,
                              sku: e.target.value,
                            }));
                          }}
                        />
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
                        <input
                          type="number"
                          placeholder="Qty"
                          onChange={(e) => {
                            setSearchFilters((option) => ({
                              ...option,
                              quantity: e.target.value,
                            }));
                          }}
                        />
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
                        <select
                          className="form-field"
                          onChange={(e) => {
                            setSearchFilters((option) => ({
                              ...option,
                              status: e.target.value,
                            }));
                          }}
                        >
                          <option value="">All</option>
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
            {selected.length > 0 && (
              <tr>
                <td colSpan={100} style={{ borderTop: 0 }}>
                  <div className="inline-flex border border-divider rounded justify-items-start">
                    <a
                      href="#"
                      className="font-semibold pt-075 pb-075 pl-15 pr-15"
                    >
                      {selected.length} selected
                    </a>
                    <a
                      href="#"
                      className="font-semibold pt-075 pb-075 pl-15 pr-15 block border-l border-divider self-center"
                    >
                      <span>Disable</span>
                    </a>
                    <a
                      href="#"
                      className="font-semibold pt-075 pb-075 pl-15 pr-15 block border-l border-divider self-center"
                    >
                      <span>Enable</span>
                    </a>
                    <a
                      href="#"
                      className="font-semibold pt-075 pb-075 pl-15 pr-15 block border-l border-divider self-center"
                    >
                      <span>Delete</span>
                    </a>
                  </div>
                </td>
              </tr>
            )}
            {productList && productList?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="form-field-container null">
                      <div className="field-wrapper radio-field">
                        <label>
                          <input
                            type="checkbox"
                            value={item.select}
                            checked={item.select === 1 ? true : false}
                            onChange={(e) => {
                              setChecked(0);
                              setProductList(
                                productList.map((items, index1) =>
                                  index1 === index
                                    ? {
                                      ...items,
                                      select:
                                        e.target.checked === true ? 1 : 0,
                                    }
                                    : items
                                )
                              );
                            }} />
                          <span className="checkbox-checked">
                            {item.select !== 0 && (
                              <svg
                                viewBox="0 0 20 20"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                              </svg>
                            )}
                          </span>
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
                          src={item?.images}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <a
                          className="hover:underline font-semibold"
                          href="/admin/products/edit/ccdb1b30-13f1-4d0f-a8a9-51ccf9e4ebd9"
                        >
                          {item?.name}
                        </a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>{item?.price}</span>
                      </div>
                    </td>
                    <td>{item?.sku}</td>
                    <td>
                      <div>
                        <span>{item?.quantity}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center">
                        <span
                          className={`${item.status === 1
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
                      <input
                        type="text"
                        onChange={(e) => {
                          setSearchFilters((option) => ({
                            ...option,
                            count: e.target.value,
                          }));
                        }}
                        value={searchFilters.count} />
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
                    <input
                      type="text"
                      value={searchFilters.page}
                      onChange={(e) => {
                        setSearchFilters((option) => ({
                          ...option,
                          page: e.target.value,
                        }));
                      }}
                    />
                    <div className="field-border" />
                  </div>
                </div>
              </div>
              <div className="last self-center">
                <a href="#">{searchFilters.totalPages}</a>
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
                <span>{searchFilters.totalCount}{/* */} records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    authUserDetails: state.auth.userInfo,
  };
};
export default connect(mapStateToProps)(Product);
