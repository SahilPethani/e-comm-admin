import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { getRecord } from "../../../apis/services/CommonApiService";
import { ApiEndPoints } from "../../../apis/ApiEndPoints";

const Area = (props) => {
  const { authUserDetails } = props;

  const [month, setMonth] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getLifeTimeSale();
  }, [authUserDetails?.userId]);

  const getLifeTimeSale = async () => {
    const user_id = authUserDetails?.userId;
    const result = await getRecord(user_id, ApiEndPoints.SALES_MONTHLY);
    if (result?.status === 200) {
      setMonth(result?.labels);
      setPrice(result?.data);
      //   setLifeTimeSale(result);
    } else {
      //   setLifeTimeSale({});
    }
  };

  //   const series = [
  //     {
  //       name: "STOCK ABC",
  //       data: month,
  //     },
  //   ];
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: month,
    },
  };
  const series = [
    {
      name: "series-1",
      data: price,
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUserDetails: state.auth.userInfo,
  };
};
export default connect(mapStateToProps)(Area);
