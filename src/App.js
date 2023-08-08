import { Suspense } from "react";
import "./App.css";
import AppRouting from "./components/shared/AppRouting";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/layout/spinner";

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <AppRouting />
      </Suspense>
      {/* <Header />
      <Sidebar />
      <Main /> */}
    </>
  );
}

export default App;
