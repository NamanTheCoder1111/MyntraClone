import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItem from "../components/FetchItem"
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
  const fetchStatus = useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet />}
      
      <Footer />
    </>
  );
}

export default App;
