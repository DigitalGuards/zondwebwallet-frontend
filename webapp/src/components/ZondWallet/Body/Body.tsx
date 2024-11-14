import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col">
      <Outlet />
    </div>
  );
};

export default Body;
