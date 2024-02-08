import DashboardSidebar from '@/Components/DashboardSidebar/DashboardSidebar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className="flex flex-row">
      <div className="w-56 min-h-screen max-h-screen overflow-auto sticky">
        <DashboardSidebar />
      </div>
      <div className="flex-1 w-full max-h-screen overflow-auto sticky">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout