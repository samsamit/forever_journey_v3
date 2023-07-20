import CreateTestCharacterForm from "@/components/admin/CreateTestCharacterForm"
import React from "react"

const page = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-6/12 flex flex-col gap-4">
        <h1>Admin page:</h1>
        <CreateTestCharacterForm />
      </div>
    </div>
  )
}

export default page
