// import React from "react";
// import { Navigate } from "react-router-dom";
// import { Header } from "./Header";
// import Sidebar from "./sidebar";

// interface Props {
//   children: React.ReactNode;
// }
// const MainLayout: React.FC<Props> = ({ children }) => {
//   const user = localStorage.getItem("userDetails");
//   // return auth?.userToken ? (
//   return (
//     <>
//       <Header />
//       <Sidebar />
//       <div className="main-content">
//         <main className="main-content-inner">{children}</main>
//       </div>
//     </>
//   );
// };

// export default MainLayout;

import React from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Sidebar />
        <div className="main-content">
          <main className="main-content-inner">{children}</main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
