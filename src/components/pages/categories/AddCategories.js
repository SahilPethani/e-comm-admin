import React, { useEffect, useState } from "react";
import Editor from "../../common/Editor";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { createRecord } from "../../apis/services/CommonApiService";
import { ApiEndPoints } from "../../apis/ApiEndPoints";
import { useNavigate } from "react-router-dom";
import { Routing } from "../../shared/constants/routing";

const AddCategories = (props) => {
  const { authUserDetails } = props;
  const navigate = useNavigate();

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const [categoriDetail, setCategoriDetail] = useState({
    name: "",
    Description: "",
    image: null,
    image_url: null,
    status: 0,
    include_in_store_menu: 1,
    parent_category: "",
    url_key: "",
    meta_title: "",
    meta_keywords: "",
    meta_description: ""
  })

  const handleCategoryDetail = (e) => {
    const { name } = e.target
    const { value } = e.target
    setCategoriDetail({ ...categoriDetail, [name]: value });
  }

  const handleSubmit = async () => {
    setLoading(true);
    const user_id = authUserDetails?.userId;
    // var bodyFormData = new FormData();
    // bodyFormData.append("name", categoriDetail.name);
    // bodyFormData.append("description", categoriDetail.Description);
    // bodyFormData.append("category_banner", categoriDetail?.image);
    // bodyFormData.append("user", user_id);
    // bodyFormData.append("status", categoriDetail.status);
    // bodyFormData.append("include_in_store_menu", categoriDetail.include_in_store_menu);
    // bodyFormData.append("url_key", categoriDetail.url_key);
    // bodyFormData.append("meta_title", categoriDetail.meta_title);
    // bodyFormData.append("meta_keywords", categoriDetail.meta_keywords);
    // bodyFormData.append("meta_description", categoriDetail.meta_description);

    let data = {
      name: categoriDetail.name,
      description: categoriDetail.Description,
      user: user_id,
      // category_banner: categoriDetail?.image,
      status: categoriDetail.status,
      include_in_store_menu: categoriDetail.include_in_store_menu,
      // parent_category: categoriDetail.parent_category,
      url_key: categoriDetail.url_key,
      meta_title: categoriDetail.meta_title,
      meta_keywords: categoriDetail.meta_keywords,
      meta_description: categoriDetail.meta_description
    };
    const result = await createRecord(data, ApiEndPoints.ADD_CATEGORIS);
    if (result?.status === 201) {
      setLoading(false);
      navigate(Routing.Categories)
      toast.success(result?.message);
    } else {
      setLoading(false);
      toast.error(result?.message);
    }
  }

  return (
    <>
      <div className="max-w-100 main-content-inner" style={{ paddingTop: 0 }}>
        <div className="page-heading flex justify-between items-center">
          <div className="flex justify-start space-x-1 items-center">
            <a
              href="/admin/categories"
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
            </a>
            <div className="self-center">
              <h1 className="page-heading-title">Create A New category</h1>
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
                          <input type="text" name="name" onChange={handleCategoryDetail} value={categoriDetail.name} defaultValue="" />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="mt-15 relative">
                        <div className="mb-1">Parent category</div>
                        <a href="#" className="text-interactive">
                          Select category
                        </a>
                        <input type="hidden" name="parent_id" defaultValue="" />
                      </div>
                      <input
                        type="text"
                        id="category_id"
                        name="category_id"
                        defaultValue=""
                        readOnly=""
                        style={{ display: "none" }}
                      />
                      <div className="ckeditor">
                        <label htmlFor="description">Description</label>
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
                          name="Description"
                          onChange={(data) => {
                            setCategoriDetail((option) => ({
                              ...option,
                              Description: data
                            }))
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
                  <h2 className="card-title">Search engine optimize</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    <div className="">
                      <div className="form-field-container null">
                        <label htmlFor="url_key">Url key</label>
                        <div className="field-wrapper flex flex-grow">
                          <input type="text" name="url_key" onChange={handleCategoryDetail} value={categoriDetail.url_key} defaultValue="" />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="form-field-container null">
                        <label htmlFor="meta_title">Meta title</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="meta_title"
                            onChange={handleCategoryDetail}
                            value={categoriDetail.meta_title}
                            defaultValue=""
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                      <div className="form-field-container null">
                        <label htmlFor="meta_keywords">Meta keywords</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            value={categoriDetail.meta_keywords}
                            type="text"
                            onChange={handleCategoryDetail}
                            name="meta_keywords"
                            defaultValue=""
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
                            value={categoriDetail.meta_description}
                            className="form-field"
                            onChange={handleCategoryDetail}
                            id="meta_description"
                            name="meta_description"
                            defaultValue={""}
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
              <div className="card shadow">
                <div className="flex justify-between card-header">
                  <h2 className="card-title">Category banner</h2>
                </div>
                <div className="card-section border-b box-border">
                  <div className="card-session-content pt-lg">
                    {categoriDetail.image_url === null &&
                      <label
                        htmlFor="categoryImageUpload"
                        className="flex flex-col justify-center image-uploader"
                      >
                        <div className="uploader-icon flex justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="flex justify-center">
                          <div type="button" className="button default">
                            <span>Add image</span>
                          </div>
                        </div>
                        <div className="flex justify-center mt-1">
                          <span style={{ color: "#6d7175", fontSize: "1.2rem" }}>
                            click to upload an image
                          </span>
                        </div>
                      </label>}
                    <input type="hidden" defaultValue="" name="image" />
                    <div className="invisible" style={{ width: 1, height: 1 }}>
                      <input
                        type="file"
                        onChange={(e) => setCategoriDetail((option) => ({
                          ...option,
                          image: e.target.files[0],
                          image_url: URL.createObjectURL(e.target.files[0])
                        }))}
                        id="categoryImageUpload"
                      />
                    </div>
                    {
                      categoriDetail.image_url !== null &&
                      <img
                        className="image-uploader-border"
                        src={categoriDetail.image_url}
                        alt="img"
                      />
                    }
                  </div>
                  {
                    categoriDetail.image_url !== null &&
                    <button
                      onClick={() =>
                        setCategoriDetail((option) => ({
                          ...option,
                          image_url: null
                        }))}
                      className="button critical outline w-100 mt-1">
                      <span>Remove</span>
                    </button>
                  }
                </div>
              </div>
              <div className="card shadow">
                <div className="card-section border-b box-border">
                  <div className="flex justify-between card-section-header mb-1">
                    <h3 className="card-session-title">Status</h3>
                  </div>
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
                              checked={categoriDetail.status === 0}
                              onChange={(e) => setCategoriDetail((option) => ({
                                ...option,
                                status: 0
                              }))}
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
                              checked={categoriDetail.status === 1}
                              onChange={(e) => setCategoriDetail((option) => ({
                                ...option,
                                status: 1
                              }))}
                            />
                            <span className="radio-checked" >
                              <span />
                            </span>
                            <span className="pl-1">Enabled</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-section border-b box-border">
                  <div className="flex justify-between card-section-header mb-1">
                    <h3 className="card-session-title">
                      Include In Store Menu
                    </h3>
                  </div>
                  <div className="card-session-content pt-lg">
                    <div className="form-field-container null">
                      <div className="field-wrapper radio-field">
                        <div>
                          <label htmlFor="include_in_nav0" className="flex">
                            <input
                              type="radio"
                              name="include_in_nav"
                              id="include_in_nav0"
                              value={0}
                              checked={categoriDetail.include_in_store_menu === 0}
                              onChange={(e) => setCategoriDetail((option) => ({
                                ...option,
                                include_in_store_menu: 0
                              }))}
                            />
                            <span className="radio-checked">
                              <span />
                            </span>
                            <span className="pl-1">No</span>
                          </label>
                        </div>
                        <div>
                          <label htmlFor="include_in_nav1" className="flex">
                            <input
                              type="radio"
                              name="include_in_nav"
                              id="include_in_nav1"
                              value={1}
                              checked={categoriDetail.include_in_store_menu === 1}
                              onChange={(e) => setCategoriDetail((option) => ({
                                ...option,
                                include_in_store_menu: 1
                              }))}
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
              </div>
            </div>
          </div>
          <div className="form-submit-button flex border-t border-divider mt-15 pt-15 justify-between">
            <button type="button" className="button critical outline">
              <span>Cancel</span>
            </button>
            <button type="button" onClick={handleSubmit} className="button primary">
              <span>Save</span>
            </button>
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
export default connect(mapStateToProps)(AddCategories);
