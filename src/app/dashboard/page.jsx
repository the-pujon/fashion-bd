import DashboardCard from "@/Components/DashboardCard/DashboardCard";
import OrdersCharts from "@/Components/OrdersChart/OrdersChart";
import SalesChart from "@/Components/SalesChart/SalesChart";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="px-6 h-[100vh] min-h-screen max-h-screen w-full overflow-auto">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <DashboardCard name="users" amount={2} />
          <DashboardCard name="products" amount={2} />
          <DashboardCard name="orders" amount={2} />
          <DashboardCard name="earnings" amount={2} />
        </div>

        {/* chart */}
        <div className="flex py-8" >
         <div className="flex-1" > <OrdersCharts /></div>
         <div className="flex-1" > <SalesChart/></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
