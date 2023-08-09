import React from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Attributes_icon,
  Categories_icon,
  Collection_icon,
  Coupon_icon,
  Home_icon,
  Orders_icon,
  Product_icon,
  Setting_icon,
} from "../../assets/icon";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const menus = [
  {
    lable: "QUICK LINKS",
    item: [
      {
        image: <Home_icon />,
        lable: "Dashboard",
        value: "dashboard",
      },
      {
        image: <Product_icon />,
        lable: "New Product",
        value: "products/new",
      },
      {
        image: <Coupon_icon />,
        lable: "New Coupon",
        value: "coupon/new",
      },
    ],
  },
  {
    lable: "CATALOG",
    item: [
      {
        image: <Product_icon />,
        lable: "Products",
        value: "products",
      },
      {
        image: <Categories_icon />,
        lable: "Categories",
        value: "categories",
      },
      {
        image: <Collection_icon />,
        lable: "Collection",
        value: "collection",
      },
      {
        image: <Attributes_icon />,
        lable: "Attributes",
        value: "attributes",
      },
    ],
  },
  {
    lable: "SALE",
    item: [
      {
        image: <Orders_icon />,
        lable: "Orders",
        value: "orders",
      },
    ],
  },
];

const Sidebar = (props) => {
  const { authUserDetails } = props;

  const navigate = useNavigate();

  const changeRout = (menu) => {
    navigate(`/${menu.value}`);
  };

  const curentPage = window.location.pathname.split("/")[1];

  return (
    <div className="admin-navigation">
      <div className="admin-nav-container">
        <div className="admin-nav">
          <ul className="list-unstyled">
            {menus?.map((menu, index) => (
              <>
                <li key={index} className="root-nav-item nav-item">
                  <div className="flex justify-between items-center">
                    <div className="root-label flex justify-between items-center">
                      <span>{menu?.lable}</span>
                    </div>
                  </div>
                  {authUserDetails &&
                    menu?.item.map((subMenu, ind) => (
                      <>
                        <ul key={ind} className="item-group">
                          <li
                            className={`${
                              curentPage === subMenu?.value && "active "
                            } nav-item`}
                          >
                            <Link
                              to={`/${subMenu?.value}`}
                              className="flex justify-left"
                            >
                              <i className="menu-icon">{subMenu?.image}</i>
                              {subMenu?.lable}
                            </Link>
                          </li>
                        </ul>
                      </>
                    ))}
                </li>
              </>
            ))}
            <li className="root-nav-item nav-item">
              <div className="flex justify-between items-center">
                <div className="root-label flex justify-between items-center">
                  <span>
                    <Setting_icon />
                  </span>
                  <Link to={"/setting/store"}>Setting</Link>
                </div>
              </div>
              <ul className="item-group"></ul>
            </li>
          </ul>
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

export default connect(mapStateToProps)(Sidebar);
