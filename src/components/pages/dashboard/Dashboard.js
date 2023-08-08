import React, { useCallback, useEffect, useState } from "react";
import {
  deleteRecord,
  fetchList,
  getRecord,
} from "../../apis/services/CommonApiService";
import { ApiEndPoints } from "../../apis/ApiEndPoints";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { authUserDetails } = props;

  const [lifeTimeSale, setLifeTimeSale] = useState()
  const [productState, setProductState] = useState([])
  console.log("🚀 ~ file: Dashboard.js:16 ~ Dashboard ~ productState:", productState)

  useEffect(() => {
    getLifeTimeSale();
  }, [authUserDetails?.userId]);

  useEffect(() => {
    getProductState();
  }, [authUserDetails?.userId]);


  const getLifeTimeSale = async () => {
    const user_id = authUserDetails?.userId;
    const result = await getRecord(user_id, ApiEndPoints.LIFE_TIME_SALE_SELLER);
    if (result?.status === 200) {
      setLifeTimeSale(result)
    } else {
      setLifeTimeSale({})
    }
  };

  const getProductState = async () => {
    const user_id = authUserDetails?.userId;
    const result = await getRecord(user_id, ApiEndPoints.PRODUCT_STATE_SELLER);
    if (result?.status === 200) {
      setProductState(result.data)
    } else {
      setProductState([])
    }
  };

  return (
    <>
      <div className="page-heading flex justify-between items-center">
        <div className="flex justify-start space-x-1 items-center">
          <div className="self-center">
            <h1 className="page-heading-title">Dashboard</h1>
          </div>
        </div>
        <div className="flex justify-end space-x-1 items-center" />
      </div>
      <div className="grid grid-cols-3 gap-x-2 grid-flow-row ">
        <div className="col-span-2 grid grid-cols-1 gap-2 auto-rows-max">
          <div className="card shadow">
            <div className="flex justify-between card-header">
              <h2 className="card-title">Sale Statistic</h2>
              <div className="flex space-x-075">
                <div className="card-action">
                  <a href="/" className="text-interactive">
                    Daily
                  </a>
                </div>
                <div className="card-action">
                  <a href="/" className="text-interactive">
                    Weekly
                  </a>
                </div>
                <div className="card-action">
                  <a href="/" className="text-interactive">
                    Monthly
                  </a>
                </div>
              </div>
            </div>
            <div className="card-section border-b box-border">
              {/* <div className="card-session-content pt-lg">
                    <div
                      className="recharts-wrapper"
                      style={{
                        position: "relative",
                        cursor: "default",
                        width: 580,
                        height: 300,
                      }}
                    >
                      <svg
                        id="asdasd"
                        className="recharts-surface"
                        width={580}
                        height={300}
                        viewBox="0 0 580 300"
                        version="1.1"
                      >
                        <title />
                        <desc />
                        <defs>
                          <clipPath id="asdasd-clip">
                            <rect x={35} y={5} height={260} width={545} />
                          </clipPath>
                        </defs>
                        <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                          <line
                            orientation="bottom"
                            width={545}
                            height={30}
                            type="category"
                            x={35}
                            y={265}
                            className="recharts-cartesian-axis-line"
                            stroke="#666"
                            fill="none"
                            x1={35}
                            y1={265}
                            x2={580}
                            y2={265}
                          />
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={265}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={35}
                                y1={271}
                                x2={35}
                                y2={265}
                              />
                              <text
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={273}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                              >
                                <tspan x={35} dy="0.71em">
                                  Mar 31
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={265}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={144}
                                y1={271}
                                x2={144}
                                y2={265}
                              />
                              <text
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={144}
                                y={273}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                              >
                                <tspan x={144} dy="0.71em">
                                  Apr 30
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={265}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={253}
                                y1={271}
                                x2={253}
                                y2={265}
                              />
                              <text
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={253}
                                y={273}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                              >
                                <tspan x={253} dy="0.71em">
                                  May 31
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={265}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={362}
                                y1={271}
                                x2={362}
                                y2={265}
                              />
                              <text
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={362}
                                y={273}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                              >
                                <tspan x={362} dy="0.71em">
                                  Jun 30
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={265}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={471}
                                y1={271}
                                x2={471}
                                y2={265}
                              />
                              <text
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={471}
                                y={273}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                              >
                                <tspan x={471} dy="0.71em">
                                  Jul 31
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x={35}
                                y={265}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={580}
                                y1={271}
                                x2={580}
                                y2={265}
                              />
                              <text
                                orientation="bottom"
                                width={545}
                                height={30}
                                type="category"
                                x="557.9296875"
                                y={273}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="middle"
                              >
                                <tspan x="557.9296875" dy="0.71em">
                                  Aug 31
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                          <line
                            orientation="left"
                            width={60}
                            height={260}
                            type="number"
                            x={-25}
                            y={5}
                            className="recharts-cartesian-axis-line"
                            stroke="#666"
                            fill="none"
                            x1={35}
                            y1={5}
                            x2={35}
                            y2={265}
                          />
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={-25}
                                y={5}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={29}
                                y1={265}
                                x2={35}
                                y2={265}
                              />
                              <text
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={27}
                                y={265}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="end"
                              >
                                <tspan x={27} dy="0.355em">
                                  0
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={-25}
                                y={5}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={29}
                                y1={200}
                                x2={35}
                                y2={200}
                              />
                              <text
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={27}
                                y={200}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="end"
                              >
                                <tspan x={27} dy="0.355em">
                                  200
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={-25}
                                y={5}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={29}
                                y1={135}
                                x2={35}
                                y2={135}
                              />
                              <text
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={27}
                                y={135}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="end"
                              >
                                <tspan x={27} dy="0.355em">
                                  400
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={-25}
                                y={5}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={29}
                                y1={70}
                                x2={35}
                                y2={70}
                              />
                              <text
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={27}
                                y={70}
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="end"
                              >
                                <tspan x={27} dy="0.355em">
                                  600
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={-25}
                                y={5}
                                className="recharts-cartesian-axis-tick-line"
                                stroke="#666"
                                fill="none"
                                x1={29}
                                y1={5}
                                x2={35}
                                y2={5}
                              />
                              <text
                                orientation="left"
                                width={60}
                                height={260}
                                type="number"
                                x={27}
                                y="10.5"
                                stroke="none"
                                fill="#666"
                                className="recharts-text recharts-cartesian-axis-tick-value"
                                textAnchor="end"
                              >
                                <tspan x={27} dy="0.355em">
                                  800
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer">
                            <defs>
                              <clipPath id="animationClipPath-recharts-area-1">
                                <rect x={35} y={0} width={545} height={1} />
                              </clipPath>
                            </defs>
                            <g
                              className="recharts-layer"
                              clipPath="url(#animationClipPath-recharts-area-1)"
                            >
                              <g className="recharts-layer">
                                <path
                                  fill="#8884d8"
                                  fillOpacity="0.6"
                                  points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                  width={545}
                                  height={260}
                                  type="monotone"
                                  stroke="none"
                                  className="recharts-curve recharts-area-area"
                                />
                                <path
                                  type="monotone"
                                  stroke="#8884d8"
                                  fill="none"
                                  fillOpacity="0.6"
                                  points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                  width={545}
                                  height={260}
                                  className="recharts-curve recharts-area-curve"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer">
                            <defs>
                              <clipPath id="animationClipPath-recharts-area-2">
                                <rect x={35} y={0} width={545} height={266} />
                              </clipPath>
                            </defs>
                            <g
                              className="recharts-layer"
                              clipPath="url(#animationClipPath-recharts-area-2)"
                            >
                              <g className="recharts-layer">
                                <path
                                  fill="#82ca9d"
                                  fillOpacity="0.6"
                                  points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                  width={545}
                                  height={260}
                                  type="monotone"
                                  stroke="none"
                                  className="recharts-curve recharts-area-area"
                                  d="M35,160.34999999999997C71.33333333333334,167.17499999999998,107.66666666666666,174,144,174C180.33333333333334,174,216.66666666666666,42.04999999999999,253,42.04999999999999C289.3333333333333,42.04999999999999,325.6666666666667,140.52499999999998,362,158.725C398.3333333333333,176.925,434.6666666666667,171.9416666666667,471,186.02500000000003C507.3333333333333,200.10833333333338,543.6666666666666,221.66666666666669,580,243.225L580,265C543.6666666666666,265,507.3333333333333,265,471,265C434.6666666666667,265,398.3333333333333,265,362,265C325.6666666666667,265,289.3333333333333,265,253,265C216.66666666666666,265,180.33333333333334,265,144,265C107.66666666666666,265,71.33333333333334,265,35,265Z"
                                />
                                <path
                                  type="monotone"
                                  stroke="#82ca9d"
                                  fill="none"
                                  fillOpacity="0.6"
                                  points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                                  width={545}
                                  height={260}
                                  className="recharts-curve recharts-area-curve"
                                  d="M35,160.34999999999997C71.33333333333334,167.17499999999998,107.66666666666666,174,144,174C180.33333333333334,174,216.66666666666666,42.04999999999999,253,42.04999999999999C289.3333333333333,42.04999999999999,325.6666666666667,140.52499999999998,362,158.725C398.3333333333333,176.925,434.6666666666667,171.9416666666667,471,186.02500000000003C507.3333333333333,200.10833333333338,543.6666666666666,221.66666666666669,580,243.225"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <div
                        tabIndex={-1}
                        role="dialog"
                        className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
                        style={{
                          pointerEvents: "none",
                          visibility: "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          transform: "translate(45px, 138px)",
                        }}
                      >
                        <div
                          className="recharts-default-tooltip"
                          style={{
                            margin: 0,
                            padding: 10,
                            backgroundColor: "rgb(255, 255, 255)",
                            border: "1px solid rgb(204, 204, 204)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <p
                            className="recharts-tooltip-label"
                            style={{ margin: 0 }}
                          >
                            Mar 31
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
              map
            </div>
          </div>
          <div className="card shadow">
            <div className="flex justify-between card-header">
              <h2 className="card-title">Best Sellers</h2>
              <div className="flex space-x-075">
                <div className="card-action">
                  <a href="/" className="text-interactive">
                    All products
                  </a>
                </div>
              </div>
            </div>
            <div className="card-section border-b box-border">
              <div className="card-session-content pt-lg">
                <table className="listing bestsellers">
                  <tbody>
                    {
                      productState?.map((item, index) => (
                        <tr>
                          <td>
                            <div
                              className="grid-thumbnail text-border border border-divider p-075 rounded flex justify-center"
                              style={{ width: "6rem", height: "6rem" }}
                            >
                              <img
                                className="self-center"
                                src={item?.product?.images[0]?.url}
                                alt=""
                              />
                            </div>
                          </td>
                          <td>
                            <a
                              href="/admin/products/edit/39c877ab-a50b-40a6-a14b-283284205eae"
                              className="font-semibold hover:underline"
                            >
                              {item?.product?.name}
                            </a>
                          </td>
                          <td>${item?.totalPrice.toFixed(2)}</td>
                          <td>{item?.totalQuantity} solded</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-2 auto-rows-max">
          <div className="card shadow">
            <div className="flex justify-between card-header">
              <h2 className="card-title">Lifetime Sale</h2>
            </div>
            <div className="card-section border-b box-border">
              <div className="card-session-content pt-lg">
                <div className="grid grid-cols-1 gap-1">
                  <div className="flex space-x-1 items-center">
                    <span
                      className="info dot"
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <div className="self-center">{lifeTimeSale?.totalOrders} orders</div>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span
                      className="info dot"
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <div className="self-center">
                      ${lifeTimeSale?.lifetimeSales} lifetime sale
                    </div>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span
                      className="success dot"
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <div className="self-center">{lifeTimeSale?.completedPercentage}% of orders completed</div>
                  </div>
                  <div className="flex space-x-1 items-center">
                    <span
                      className="critical dot"
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <div className="self-center">{lifeTimeSale?.cancelledPercentage}% of orders cancelled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-section border-b box-border">
              <div className="card-session-content pt-lg">
                <div style={{ height: 200 }}>
                  <div
                    className="recharts-responsive-container"
                    style={{ width: "100%", height: "100%" }}
                    width={260}
                    height={200}
                  >
                    <div
                      className="recharts-wrapper"
                      style={{
                        position: "relative",
                        cursor: "default",
                        width: 260,
                        height: 200,
                      }}
                    >
                      <svg
                        cx="50%"
                        cy="50%"
                        className="recharts-surface"
                        width={260}
                        height={200}
                        viewBox="0 0 260 200"
                        version="1.1"
                      >
                        <title />
                        <desc />
                        <defs>
                          <clipPath id="recharts3-clip">
                            <rect x={3} y={5} height={190} width={250} />
                          </clipPath>
                        </defs>
                        <g className="recharts-layer recharts-pie">
                          <g className="recharts-layer">
                            <g className="recharts-layer recharts-pie-sector" />
                            <g className="recharts-layer recharts-pie-sector" />
                            <g className="recharts-layer recharts-pie-sector">
                              <path
                                name="Others"
                                fill="#a4e8f2"
                                stroke="#fff"
                                cx={130}
                                cy={100}
                                className="recharts-sector"
                                d="M 206,100
    A 76,76,0,
    1,0,
    205.99999998842452,100.00132645023145
  L 130,100 Z"
                              />
                            </g>
                          </g>
                          <g className="recharts-layer recharts-pie-labels">
                            <g className="recharts-layer">
                              <text
                                fill="#aee9d1"
                                stroke="none"
                                cx={130}
                                cy={100}
                                name="Completed"
                                x={226}
                                y={100}
                                alignmentBaseline="middle"
                                className="recharts-text recharts-pie-label-text"
                                textAnchor="start"
                              >
                                <tspan x={226} dy="0em">
                                  0
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer">
                              <text
                                fill="#fed3d1"
                                stroke="none"
                                cx={130}
                                cy={100}
                                name="Cancelled"
                                x={226}
                                y={100}
                                alignmentBaseline="middle"
                                className="recharts-text recharts-pie-label-text"
                                textAnchor="start"
                              >
                                <tspan x={226} dy="0em">
                                  0
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer">
                              <text
                                fill="#a4e8f2"
                                stroke="none"
                                cx={130}
                                cy={100}
                                name="Others"
                                x={34}
                                y="99.99999999999999"
                                alignmentBaseline="middle"
                                className="recharts-text recharts-pie-label-text"
                                textAnchor="end"
                              >
                                <tspan x={34} dy="0em">
                                  100
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="copyright">
          <span>Copyright © 2021 WolfShop</span>
        </div>
        <div className="version">
          <span>Version 1.0 dev</span>
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
export default connect(mapStateToProps)(Dashboard);
