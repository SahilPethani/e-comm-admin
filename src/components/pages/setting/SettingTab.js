import React, { useState } from "react";
import { Link } from "react-router-dom";

const SettingTab = () => {
  return (
    <>
      <div className="col-span-2">
        <div className="setting-page-menu">
          <div className="card shadow">
            <div className="card-section border-b box-border">
              <div className="flex justify-between card-section-header mb-1">
                <h3 className="card-session-title">
                  <Link to={"/setting/store"}>Store Setting</Link>
                </h3>
              </div>
              <div className="card-session-content pt-lg">
                <div>Configure your store information</div>
              </div>
            </div>
            <div className="card-section border-b box-border">
              <div className="flex justify-between card-section-header mb-1">
                <h3 className="card-session-title">
                  <Link to={"/setting/payments"}>Payment Setting</Link>
                </h3>
              </div>
              <div className="card-session-content pt-lg">
                <div>Configure the available payment methods</div>
              </div>
            </div>
            <div className="card-section border-b box-border">
              <div className="flex justify-between card-section-header mb-1">
                <h3 className="card-session-title">
                  <Link to={"/setting/shipping"}>Shipping Setting</Link>
                </h3>
              </div>
              <div className="card-session-content pt-lg">
                <div>Where you ship, shipping methods and delivery fee</div>
              </div>
            </div>
            <div className="card-section border-b box-border">
              <div className="flex justify-between card-section-header mb-1">
                <h3 className="card-session-title">
                  <Link to={"/setting/tax"}>Tax Setting</Link>
                </h3>
              </div>
              <div className="card-session-content pt-lg">
                <div>Configure tax classes and tax rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingTab;
