import React from "react";
import { Main_logo } from "../../assets/icon";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/admin" className="flex items-end">
          <Main_logo width={"4rem"} height={"3rem"} />
          <span className="font-bold text-uppercase">Wolfshop</span>
        </a>
      </div>
      <div className="search-box">
        <div className="form-field-container null">
          <div className="field-wrapper flex flex-grow">
            <div className="field-prefix align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "1.8rem", height: "1.8rem" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input type="text" placeholder="Search" defaultValue="" />
            <div className="field-border" />
          </div>
        </div>
      </div>
      <div className="admin-user flex flex-grow justify-end items-center">
        <div className="flex justify-items-start gap-1 justify-center">
          <div className="relative">
            <a className="first-letter" href="/">
              D
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
