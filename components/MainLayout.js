import Meta from "./Meta";
import Navbar from "./Navbar/navbar/navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Meta />
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
