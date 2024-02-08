import DashboardCard from '@/Components/DashboardCard/DashboardCard'
import React from 'react'

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
    </div>
    </div>
  )
}

export default Dashboard