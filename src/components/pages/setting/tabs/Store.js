import React, { useEffect, useState } from "react";
import SettingTab from "../SettingTab";
import { StoreCountry, StoreProvince, StoreTimeZone, rowsPerPageJsonData } from '../../../utils/JsonData';
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { ApiEndPoints } from "../../../apis/ApiEndPoints";
import { getRecord, updateRecord } from "../../../apis/services/CommonApiService";
import Spinner from "../../../layout/spinner/spinner";

const Store_setting = (props) => {
  const { authUserDetails } = props;

  const [loading, setLoading] = useState(false);
  const [storDetail, setStorDetail] = useState({
    store_name: "",
    store_description: "",
    time_zone: "",
    store_phone_number: "",
    store_email: "",
    country: "",
    address: "",
    city: "",
    province: "",
    postalCode: ""
  })

  useEffect(() => {
    getStoreDetail();
  }, [authUserDetails?.userId]);

  const getStoreDetail = async () => {
    const user_id = authUserDetails?.userId;
    const result = await getRecord(user_id, ApiEndPoints.STORE_DETAIL);
    if (result?.status === 200) {
      setStorDetail({
        store_name: result.data.store_name,
        store_description: result.data.store_description,
        time_zone: result.data.time_zone,
        store_phone_number: result.data.store_phone_number,
        store_email: result.data.store_email,
        country: result.data.country,
        address: result.data.address,
        city: result.data.city,
        province: result.data.province,
        postalCode: result.data.postalCode
      })
    } else {
      setStorDetail({})
    }
  };

  const handleStoreInfo = (e) => {
    setStorDetail({ ...storDetail, [e.target.name]: e.target.value });
  }

  const handleupdateStoreInfo = async () => {
    setLoading(true);
    const user_id = authUserDetails?.userId;
    let data = storDetail
    const result = await updateRecord(data, user_id, ApiEndPoints.STORE_DETAIL);
    if (result?.status === 200) {
      setLoading(false);
      getStoreDetail()
      toast.success(result.message);
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  }


  return (
    <>
      {loading && <Spinner />}
      <div className="grid grid-cols-6 gap-x-2 grid-flow-row ">
        <SettingTab />
        <div className="col-span-4">
          <div>
            <div className="card shadow">
              <div className="card-section border-b box-border">
                <div className="flex justify-between card-section-header mb-1">
                  <h3 className="card-session-title">Store Information</h3>
                </div>
                <div className="card-session-content pt-lg">
                  <div className="form-field-container null">
                    <label htmlFor="storeName">Store Name</label>
                    <div className="field-wrapper flex flex-grow">
                      <input
                        type="text"
                        name="store_name"
                        placeholder="Store Name"
                        onChange={handleStoreInfo}
                        value={storDetail.store_name}
                      />
                      <div className="field-border" />
                    </div>
                  </div>
                  <div className="form-field-container null">
                    <label htmlFor="storeDescription">Store Description</label>
                    <div className="field-wrapper flex flex-grow">
                      <textarea
                        type="text"
                        className="form-field"
                        id="storeDescription"
                        onChange={handleStoreInfo}
                        value={storDetail.store_description}
                        name="store_description"
                        placeholder="Store Description"
                      />
                      <div className="field-border" />
                    </div>
                  </div>
                  <div className="form-field-container dropdown null">
                    <label htmlFor="storeTimeZone">TimeZone</label>
                    <div className="field-wrapper flex flex-grow items-baseline">
                      <StoreTimeZone time_zone={storDetail.time_zone} handleStoreInfo={handleStoreInfo}/>
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
              <div className="card-section border-b box-border">
                <div className="flex justify-between card-section-header mb-1">
                  <h3 className="card-session-title">Contact Information</h3>
                </div>
                <div className="card-session-content pt-lg">
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <div className="form-field-container null">
                        <label htmlFor="storePhoneNumber">
                          Store Phone Number
                        </label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="store_phone_number"
                            onChange={handleStoreInfo}
                            value={storDetail.store_phone_number}
                            placeholder="Store Phone Number"
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="form-field-container null">
                        <label htmlFor="storeEmail">Store Email</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="store_email"
                            onChange={handleStoreInfo}
                            value={storDetail.store_email}
                            placeholder="Store Email"
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-section border-b box-border">
                <div className="flex justify-between card-section-header mb-1">
                  <h3 className="card-session-title">Address</h3>
                </div>
                <div className="card-session-content pt-lg">
                  <div style={{ marginTop: "1rem" }}>
                    <div className="form-field-container dropdown null">
                      <label htmlFor="storeCountry">Country</label>
                      <div className="field-wrapper flex flex-grow items-baseline">
                        <StoreCountry country={storDetail.country} handleStoreInfo={handleStoreInfo}/>
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
                  <div className="form-field-container null">
                    <label htmlFor="storeAddress">Address</label>
                    <div className="field-wrapper flex flex-grow">
                      <input
                        type="text"
                        name="address"
                        onChange={handleStoreInfo}
                        value={storDetail.address}
                        placeholder="Store Address"
                      />
                      <div className="field-border" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                      <div className="form-field-container null">
                        <label htmlFor="storeCity">City</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="city"
                            onChange={handleStoreInfo}
                            value={storDetail.city}
                            placeholder="City"
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="form-field-container dropdown null">
                        <label htmlFor="storeProvince">Province</label>
                        <div className="field-wrapper flex flex-grow items-baseline">
                          <StoreProvince province={storDetail.province} handleStoreInfo={handleStoreInfo}/>
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
                    <div>
                      <div className="form-field-container null">
                        <label htmlFor="storePostalCode">PostalCode</label>
                        <div className="field-wrapper flex flex-grow">
                          <input
                            type="text"
                            name="postalCode"
                            onChange={handleStoreInfo}
                            value={storDetail.postalCode}
                            placeholder="PostalCode"
                          />
                          <div className="field-border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-submit-button flex border-t border-divider mt-1 pt-1">
              <button type="button" onClick={handleupdateStoreInfo} className="button primary">
                <span>Save</span>
              </button>
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
export default connect(mapStateToProps)(Store_setting);