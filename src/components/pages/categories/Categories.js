import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiEndPoints } from "../../apis/ApiEndPoints";
import { fetchList } from "../../apis/services/CommonApiService";

const Categories = () => {
  
  const [searchFilters, setSearchFilters] = useState({
    searchText: "",
    status: "",
    include_in_menu: "",
    count: 10,
    page: "",
    totalPages: "",
    totalCount: "",
  });
  const [checked, setChecked] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const data = categoryList.filter((item) => item.select === 1);
    setSelected(data);
    if (data.length === categoryList.length) {
      setChecked(1);
    } else {
      setChecked(0);
    }
  }, [categoryList, checked]);

  const handleTaxSearch = (event) => {
    const { value } = event.target;
    setSearchFilters((prev) => ({
      ...prev,
      searchText: value,
    }));
  };

  const getCategorisList = useCallback(async () => {
    const result = await fetchList(
      ApiEndPoints.GET_CATEGORIS +
        `?page=${searchFilters.page}&status=${searchFilters.status}&include_in_menu=${searchFilters.include_in_menu}&searchText=${searchFilters.searchText}&count=${searchFilters.count}`
    );
    if (result?.status === 200) {
      const list = [];
      for (var j in result.data) {
        list.push({
          name: result.data[j].name,
          status: result.data[j].status,
          include_in_menu: result.data[j].include_in_store_menu,
          select: 0,
        });
      }
      setCategoryList(list);
      setSearchFilters((option) => ({
        ...option,
        totalPages: result.totalPages,
        page: result.currentPage,
        totalCount: result.totalCategorysCount,
      }));
    } else {
      setCategoryList([]);
    }
  }, [
    searchFilters.include_in_menu,
    searchFilters.status,
    searchFilters.searchText,
    searchFilters.page,
    searchFilters.count,
  ]);

  useEffect(() => {
    getCategorisList();
  }, [getCategorisList]);

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
                      <input
                        type="checkbox"
                        value={checked}
                        checked={checked === 1 ? true : false}
                        onChange={(e) => {
                          categoryList.forEach((elements, index) => {
                            categoryList[index].select =
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
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Category Name</span>
                  </div>
                  <div className="filter" style={{ width: "15rem" }}>
                    <div className="form-field-container null">
                      <div className="field-wrapper flex flex-grow">
                        <input
                          type="text"
                          onChange={handleTaxSearch}
                          value={searchFilters.searchText}
                          placeholder="Category Name"
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
              <th className="column">
                <div className="table-header status-header">
                  <div className="title" style={{ marginBottom: "1rem" }}>
                    <span>Include In Menu</span>
                  </div>
                  <div className="filter">
                    <div className="form-field-container dropdown null">
                      <div className="field-wrapper flex flex-grow items-baseline">
                        <select
                          className="form-field"
                          onChange={(e) => {
                            setSearchFilters((option) => ({
                              ...option,
                              include_in_menu: e.target.value,
                            }));
                          }}
                        >
                          <option value="">All</option>
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
                      <span>Delete</span>
                    </a>
                  </div>
                </td>
              </tr>
            )}
            {categoryList &&
              categoryList.map((item, index) => (
                <tr>
                  <td style={{ width: "2rem" }}>
                    <div className="form-field-container null">
                      <div className="field-wrapper radio-field">
                        <label>
                          <input
                            type="checkbox"
                            value={item.select}
                            checked={item.select === 1 ? true : false}
                            onChange={(e) => {
                              setChecked(0);
                              setCategoryList(
                                categoryList.map((items, index1) =>
                                  index1 === index
                                    ? {
                                        ...items,
                                        select:
                                          e.target.checked === true ? 1 : 0,
                                      }
                                    : items
                                )
                              );
                            }}
                          />
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
                  <td>
                    <div>
                      <a
                        className="hover:underline font-semibold"
                        href="/admin/categories/edit/b26a23c0-4e7d-455c-84dc-acb3bc8cb11b"
                      >
                        {item.name}
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center">
                      <span
                        className={`${
                          item.status === 0 ? "critical" : "success"
                        } dot`}
                        style={{ width: "1.2rem", height: "1.2rem" }}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="nodejscart-switch">
                      <div className="flex justify-center">
                        <span>{item.include_in_menu === 0 ? "No" : "Yes"}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
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
                        value={searchFilters.count}
                        onChange={(e) => {
                          setSearchFilters((option) => ({
                            ...option,
                            count: e.target.value,
                          }));
                        }}
                      />
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
              <div className="self-center">
                <span>{searchFilters.totalCount} records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
