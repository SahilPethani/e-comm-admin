import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Editor from "../../common/Editor";
import { Link, useNavigate } from "react-router-dom";
import { createRecord } from "../../apis/services/CommonApiService";
import { ApiEndPoints } from "../../apis/ApiEndPoints";
import { toast } from "react-toastify";
import { Routing } from "../../shared/constants/routing";

const NewProduct = (props) => {
  const { authUserDetails } = props;
  const navigate = useNavigate();

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const [productDetail, setProductDetail] = useState({
    name: "",
    sku: "",
    price: "",
    weight: "",
    tax_class: "",
    description: "",
    short_description: "",
    image: [],
    image_url: [],
    url_key: "",
    meta_title: "",
    meta_keywords: "",
    meta_description: "",
    status: 0,
    visibility: 0,
    manage_stock: 0,
    stock_availability: 0,
    quantity: "",
  });
  console.log("🚀 ~ file: NewProduct.js:33 ~ NewProduct ~ productDetail:", productDetail)

  const handleProduct = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };

  const uploder = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map((file) => ({
      image: file,
      image_url: URL.createObjectURL(file),
    }));

    setProductDetail((prevOption) => ({
      ...prevOption,
      image: [...prevOption.image, ...newImages],
    }));
  };

  const handleSubmit = async () => {
    // setLoading(true);
    let data = {
      name: productDetail.name,
      description: productDetail.description,
      images: productDetail.image.map((item)=> item.image_url),
      short_description: productDetail.short_description,
      price: productDetail.price,
      category: "64d38271b0e18f77d91181a9",
      stock: productDetail.quantity,
      status: productDetail.status,
      sku: productDetail.sku,
      weight: productDetail.weight,
      visibility: productDetail.visibility,
      stock_availability: productDetail.stock_availability,
      manage_stock: productDetail.manage_stock,
      quantity: productDetail.quantity,
      discount: 0
    };
    const result = await createRecord(data, ApiEndPoints.ADD_PRODUCT_SELLER);
    if (result?.status === 201) {
      setLoading(false);
      // navigate(Routing.Categories);
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
    console.log("🚀 ~ file: NewProduct.js:70 ~ handleSubmit ~ data:", data)
  };
  return (
    <div className="main-content-inner">
      <div className="max-w-100 mx-auto mt-3 mb-3">
        <div className="page-heading flex justify-between items-center">
          <div className="flex justify-start space-x-1 items-center">
            <Link
              to="/products"
              className="breadcrum-icon border block border-border rounded mr-075"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="text-icon"
                  viewBox="0 0 20 20"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z" />
                </svg>
              </span>
            </Link>
            <div className="self-center">
              <h1 className="page-heading-title">Create A New Product</h1>
            </div>
          </div>
          <div className="flex justify-end space-x-1 items-center" />
        </div>
        <div>
          <div className="grid grid-cols-3 gap-x-2 grid-flow-row ">
            <div className="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
              <div className="card shadow">
                <div className="flex justify-between card-header">
                  <h2 className="card-title">General</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="">
                      <div className="form-field-container null">
                        <label htmlFor="name">Name</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleProduct}
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-1 mt-15">
                        <div>
                          <div className="form-field-container null">
                            <label htmlFor="SKU">SKU</label>
                            <div className="field-wrapper flex flex-grow">
                              <input
                                type="text"
                                name="sku"
                                placeholder="SKU"
                                onChange={handleProduct}
                              />
                              <div className="field-border" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="form-field-container null">
                            <label htmlFor="price">Price</label>
                            <div className="field-wrapper flex flex-grow">
                              <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                defaultValue=""
                                onChange={handleProduct}
                              />
                              <div className="field-border" />
                              <div className="field-suffix">USD</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="form-field-container null">
                            <label htmlFor="weight">Weight</label>
                            <div className="field-wrapper flex flex-grow">
                              <input
                                type="text"
                                name="weight"
                                placeholder="Weight"
                                defaultValue=""
                                onChange={handleProduct}
                              />
                              <div className="field-border" />
                              <div className="field-suffix">kg</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-field-container dropdown null">
                        <label htmlFor="tax_class">Tax class</label>
                        <div className="field-wrapper flex flex-grow items-baseline">
                          <select
                            className="form-field"
                            id="tax_class"
                            name="tax_class"
                            placeholder="None"
                            onChange={handleProduct}
                          >
                            <option selected value={0}>
                              None
                            </option>
                            <option value={1}>Taxable Goods</option>
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
                      <div className="ckeditor">
                        <label htmlFor="description mt-1">Description</label>
                        <div className="image-icon mt-1">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ width: 20, height: 20 }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="hover:fill-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </a>
                        </div>
                        <Editor
                          name="description"
                          onChange={(data) => {
                            setProductDetail((option) => ({
                              ...option,
                              description: data,
                            }));
                          }}
                          editorLoaded={editorLoaded}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="flex justify-between card-header">
                  <h2 className="card-title">Media</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="product-image-manager">
                      <div id="images" className="image-list" tabIndex={0}>
                        {productDetail.image.map((imgObj, index) => (
                          <img
                            key={index}
                            src={imgObj.image_url}
                            alt={`Image ${index}`}
                          />
                        ))}
                        <div className="uploader grid-item">
                          <div>
                            <label htmlFor="image" className="uploadicon">
                              <svg
                                style={{ width: 30, height: 30 }}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </label>
                          </div>
                          <div className="invisible">
                            <input
                              type="file"
                              name="image"
                              id="image"
                              multiple=""
                              onChange={uploder}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="flex justify-between card-header">
                  <h2 className="card-title">Search engine optimize</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="">
                      <div className="form-field-container null">
                        <label htmlFor="url_key">Url key</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="url_key"
                            defaultValue=""
                            onChange={handleProduct}
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="form-field-container null">
                        <label htmlFor="meta_title">Meta title</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="meta_title"
                            defaultValue=""
                            onChange={handleProduct}
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="form-field-container null">
                        <label htmlFor="meta_keywords">Meta keywords</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="meta_keywords"
                            defaultValue=""
                            onChange={handleProduct}
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="form-field-container null">
                        <label htmlFor="meta_description">
                          Meta description
                        </label>
                        <div className="field-wrapper flex flex-grow">
                          <textarea
                            type="text"
                            className="form-field"
                            id="meta_description"
                            name="meta_description"
                            onChange={handleProduct}
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
              <div className="card shadow subdued">
                <div className="flex justify-between card-header">
                  <h2 className="card-title">Product status</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="form-field-container null">
                      <label htmlFor="status">Status</label>
                      <div className="card-session-content pt-lg">
                        <div className="form-field-container null">
                          <div className="field-wrapper radio-field">
                            <div>
                              <label htmlFor="status0" className="flex">
                                <input
                                  type="radio"
                                  name="status"
                                  id="status0"
                                  value={0}
                                  checked={productDetail.status === 0}
                                  onChange={(e) =>
                                    setProductDetail((option) => ({
                                      ...option,
                                      status: 0,
                                    }))
                                  }
                                />
                                <span className="radio-checked">
                                  <span />
                                </span>
                                <span className="pl-1">Disabled</span>
                              </label>
                            </div>
                            <div>
                              <label htmlFor="status1" className="flex">
                                <input
                                  type="radio"
                                  name="status"
                                  id="status1"
                                  value={1}
                                  checked={productDetail.status === 1}
                                  onChange={(e) =>
                                    setProductDetail((option) => ({
                                      ...option,
                                      status: 1,
                                    }))
                                  }
                                />
                                <span className="radio-checked">
                                  <span />
                                </span>
                                <span className="pl-1">Enabled</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="form-field-container null">
                      <label htmlFor="visibility">Visibility</label>
                      <div className="field-wrapper radio-field">
                        <div>
                          <label htmlFor="Visibility0" className="flex">
                            <input
                              type="radio"
                              name="Visibility"
                              id="Visibility0"
                              value={0}
                              checked={productDetail.visibility === 0}
                              onChange={(e) =>
                                setProductDetail((option) => ({
                                  ...option,
                                  visibility: 0,
                                }))
                              }
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">Not visible</span>
                          </label>
                        </div>
                        <div>
                          <label htmlFor="Visibility1" className="flex">
                            <input
                              type="radio"
                              name="Visibility"
                              id="Visibility1"
                              value={1}
                              checked={productDetail.visibility === 1}
                              onChange={(e) =>
                                setProductDetail((option) => ({
                                  ...option,
                                  visibility: 1,
                                }))
                              }
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">Visible</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow subdued">
                <div className="flex justify-between card-header">
                  <h2 className="card-title">Inventory</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="form-field-container null">
                      <label htmlFor="manage_stock">Manage stock?</label>
                      <div className="field-wrapper radio-field">
                        <div>
                          <label htmlFor="stock0" className="flex">
                            <input
                              type="radio"
                              name="stock"
                              id="stock0"
                              value={0}
                              checked={productDetail.manage_stock === 0}
                              onChange={(e) =>
                                setProductDetail((option) => ({
                                  ...option,
                                  manage_stock: 0,
                                }))
                              }
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">No</span>
                          </label>
                        </div>
                        <div>
                          <label htmlFor="stock1" className="flex">
                            <input
                              type="radio"
                              name="stock"
                              id="stock1"
                              value={1}
                              checked={productDetail.manage_stock === 1}
                              onChange={(e) =>
                                setProductDetail((option) => ({
                                  ...option,
                                  manage_stock: 1,
                                }))
                              }
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">Yes</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="form-field-container null">
                      <label htmlFor="stock_availability">
                        Stock availability
                      </label>
                      <div className="field-wrapper radio-field">
                        <div>
                          <label htmlFor="stock_availability0" className="flex">
                            <input
                              type="radio"
                              name="stock_availability"
                              id="stock_availability0"
                              value={1}
                              checked={productDetail.stock_availability === 0}
                              onChange={(e) =>
                                setProductDetail((option) => ({
                                  ...option,
                                  stock_availability: 0,
                                }))
                              }
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">No</span>
                          </label>
                        </div>
                        <div>
                          <label htmlFor="stock_availability1" className="flex">
                            <input
                              type="radio"
                              name="stock_availability"
                              id="stock_availability1"
                              value={1}
                              checked={productDetail.stock_availability === 1}
                              onChange={(e) =>
                                setProductDetail((option) => ({
                                  ...option,
                                  stock_availability: 1,
                                }))
                              }
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">Yes</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="form-field-container null">
                      <label htmlFor="qty">Quantity</label>
                      <div className="field-wrapper flex flex-grow">
                        <input
                          type="text"
                          name="qty"
                          placeholder="Quantity"
                          defaultValue=""
                          onChange={(e) => setProductDetail((option) => ({
                            ...option,
                            quantity: e.target.value,
                          }))}
                        />
                        <div className="field-border" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-section border-b box-border">
                  <div className="flex justify-between card-section-header mb-1">
                    <h3 className="card-session-title">Attribute group</h3>
                  </div>
                  <div className="card-session-content pt-lg">
                    <div>
                      <div className="form-field-container dropdown null">
                        <div className="field-wrapper flex flex-grow items-baseline">
                          <select
                            className="form-field"
                            id="group_id"
                            name="group_id"
                          >
                            <option selected="" value="" disabled="">
                              Please select
                            </option>
                            <option value={1}>Default</option>
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
                </div>
                <div className="card-section border-b box-border">
                  <div className="flex justify-between card-section-header mb-1">
                    <h3 className="card-session-title">Attributes</h3>
                  </div>
                  <div className="card-session-content pt-lg">
                    <table className="table table-auto">
                      <tbody>
                        <tr>
                          <td>Size</td>
                          <td>
                            <input
                              type="hidden"
                              defaultValue="size"
                              name="attributes[0][attribute_code]"
                            />
                            <div className="form-field-container dropdown null">
                              <div className="field-wrapper flex flex-grow items-baseline">
                                <select
                                  className="form-field"
                                  id="attributes[0][value]"
                                  name="attributes[0][value]"
                                >
                                  <option selected="" value="" disabled="">
                                    Please select
                                  </option>
                                  <option value={4}>X</option>
                                  <option value={5}>M</option>
                                  <option value={6}>L</option>
                                  <option value={25}>S</option>
                                  <option value={26}>XL</option>
                                  <option value={30}>XXL</option>
                                  <option value={31}>SL</option>
                                  <option value={32}>ML</option>
                                  <option value={33}>DS</option>
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
                          </td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>
                            <input
                              type="hidden"
                              defaultValue="color"
                              name="attributes[1][attribute_code]"
                            />
                            <div className="form-field-container dropdown null">
                              <div className="field-wrapper flex flex-grow items-baseline">
                                <select
                                  className="form-field"
                                  id="attributes[1][value]"
                                  name="attributes[1][value]"
                                >
                                  <option selected="" value="" disabled="">
                                    Please select
                                  </option>
                                  <option value={7}>Red</option>
                                  <option value={8}>Blue</option>
                                  <option value={14}>Black</option>
                                  <option value={17}>Green</option>
                                  <option value={18}>White</option>
                                  <option value={19}>Pink</option>
                                  <option value={23}>Grey</option>
                                  <option value={24}>Brown</option>
                                  <option value={27}>Purple</option>
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
                          </td>
                        </tr>
                        <tr>
                          <td>Material</td>
                          <td>
                            <input
                              type="hidden"
                              defaultValue="material"
                              name="attributes[2][attribute_code]"
                            />
                            <div className="form-field-container dropdown null">
                              <div className="field-wrapper flex flex-grow items-baseline">
                                <select
                                  className="form-field"
                                  id="attributes[2][value]"
                                  name="attributes[2][value]"
                                >
                                  <option selected="" value="" disabled="">
                                    Please select
                                  </option>
                                  <option value={15}>Iron</option>
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
                          </td>
                        </tr>
                        <tr>
                          <td>Brand</td>
                          <td>
                            <input
                              type="hidden"
                              defaultValue="brand"
                              name="attributes[3][attribute_code]"
                            />
                            <div className="form-field-container dropdown null">
                              <div className="field-wrapper flex flex-grow items-baseline">
                                <select
                                  className="form-field"
                                  id="attributes[3][value]"
                                  name="attributes[3][value]"
                                >
                                  <option selected="" value="" disabled="">
                                    Please select
                                  </option>
                                  <option value={21}>Converse</option>
                                  <option value={29}>Adidas</option>
                                  <option value={37}>Nike</option>
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
                          </td>
                        </tr>
                        <tr>
                          <td>Quantity</td>
                          <td>
                            <input
                              type="hidden"
                              defaultValue="Qty"
                              name="attributes[4][attribute_code]"
                            />
                            <div className="form-field-container dropdown null">
                              <div className="field-wrapper flex flex-grow items-baseline">
                                <select
                                  className="form-field"
                                  id="attributes[4][value]"
                                  name="attributes[4][value]"
                                >
                                  <option selected="" value="" disabled="">
                                    Please select
                                  </option>
                                  <option value={38}>10</option>
                                  <option value={39}>20</option>
                                  <option value={40}>30</option>
                                  <option value={41}>40</option>
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
            <button type="button" className="button critical outline">
              <span>Cancel</span>
            </button>
            <button
              type="button"
              className="button primary"
              onClick={handleSubmit}
            >
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    authUserDetails: state.auth.userInfo,
  };
};
export default connect(mapStateToProps)(NewProduct);
