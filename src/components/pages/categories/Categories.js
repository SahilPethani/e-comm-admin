import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="page-heading-2 flex justify-between items-center">
        <div className="flex justify-start space-x-1 items-center">
          <div className="self-center">
            <h1 className="page-heading-title">Categories</h1>
          </div>
        </div>
        <div className="flex justify-end space-x-1 items-center">
          <Link to="/categories/new" className="button primary">
            <span>New Category</span>
          </Link>
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
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Category Name</span>
                  </div>
                  <div className="filter" style={{ width: "15rem" }}>
                    <div className="form-field-container null">
                      <div className="field-wrapper flex flex-grow">
                        <input
                          type="text"
                          placeholder="Category Name"
                          defaultValue=""
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
                        <select className="form-field">
                          <option value="" disabled="">
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
              <th className="column">
                <div className="table-header status-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Include In Menu</span>
                  </div>
                  <div className="filter">
                    <div className="form-field-container dropdown null">
                      <div className="field-wrapper flex flex-grow items-baseline">
                        <select className="form-field">
                          <option value="" disabled="">
                            Please select
                          </option>
                          <option value="all">All</option>
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
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
            <tr>
              <td colSpan={100} style={{ borderTop: 0 }}>
                <div className="inline-flex border border-divider rounded justify-items-start">
                  <a
                    href="#"
                    className="font-semibold pt-075 pb-075 pl-15 pr-15"
                  >
                    5 selected
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
            <tr>
              <td style={{ width: "2rem" }}>
                <div className="form-field-container null">
                  <div className="field-wrapper radio-field">
                    <label>
                      <input type="checkbox" defaultValue={1} />
                      <span className="checkbox-checked">
                        <svg
                          viewBox="0 0 20 20"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                        </svg>
                      </span>
                      <span className="pl-05" />
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <a
                    className="hover:underline font-semibold"
                    href="/admin/categories/edit/b26a23c0-4e7d-455c-84dc-acb3bc8cb11b"
                  >
                    Men / Sneaker
                  </a>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="success dot"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </div>
              </td>
              <td>
                <div className="nodejscart-switch">
                  <div>
                    <span>No</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "2rem" }}>
                <div className="form-field-container null">
                  <div className="field-wrapper radio-field">
                    <label>
                      <input type="checkbox" defaultValue={1} />
                      <span className="checkbox-checked">
                        <svg
                          viewBox="0 0 20 20"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                        </svg>
                      </span>
                      <span className="pl-05" />
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <a
                    className="hover:underline font-semibold"
                    href="/admin/categories/edit/aaa76973-6f3a-46e8-a06a-2567c7d3f430"
                  >
                    Men / Running
                  </a>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="success dot"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </div>
              </td>
              <td>
                <div className="nodejscart-switch">
                  <div>
                    <span>No</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "2rem" }}>
                <div className="form-field-container null">
                  <div className="field-wrapper radio-field">
                    <label>
                      <input type="checkbox" defaultValue={1} />
                      <span className="checkbox-checked">
                        <svg
                          viewBox="0 0 20 20"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                        </svg>
                      </span>
                      <span className="pl-05" />
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <a
                    className="hover:underline font-semibold"
                    href="/admin/categories/edit/d5111391-d1ea-4ea0-9e21-1bfcffe23f48"
                  >
                    Women
                  </a>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="success dot"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </div>
              </td>
              <td>
                <div className="nodejscart-switch">
                  <div>
                    <span>Yes</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "2rem" }}>
                <div className="form-field-container null">
                  <div className="field-wrapper radio-field">
                    <label>
                      <input type="checkbox" defaultValue={1} />
                      <span className="checkbox-checked">
                        <svg
                          viewBox="0 0 20 20"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                        </svg>
                      </span>
                      <span className="pl-05" />
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <a
                    className="hover:underline font-semibold"
                    href="/admin/categories/edit/9a67d172-dacf-4dc1-8bb5-e00bd1ec733a"
                  >
                    Kids
                  </a>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="success dot"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </div>
              </td>
              <td>
                <div className="nodejscart-switch">
                  <div>
                    <span>Yes</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ width: "2rem" }}>
                <div className="form-field-container null">
                  <div className="field-wrapper radio-field">
                    <label>
                      <input type="checkbox" defaultValue={1} />
                      <span className="checkbox-checked">
                        <svg
                          viewBox="0 0 20 20"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" />
                        </svg>
                      </span>
                      <span className="pl-05" />
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <a
                    className="hover:underline font-semibold"
                    href="/admin/categories/edit/124bde35-3880-48ba-a1f9-61a51e0ca748"
                  >
                    Men
                  </a>
                </div>
              </td>
              <td>
                <div className="flex justify-center">
                  <span
                    className="success dot"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </div>
              </td>
              <td>
                <div className="nodejscart-switch">
                  <div>
                    <span>Yes</span>
                  </div>
                </div>
              </td>
            </tr>
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
                <a href="#">1</a>
              </div>
              <div className="self-center">
                <span>5{/* */} records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
