import React from 'react'

const FieldDisplay = ({Attribute,Value}:{Attribute:string,Value:String | number | undefined }) => {
  return (
    <div className="mb-4 flex flex-row w-full px-1 pb-3 justify-between">
    <div className="text-white text-left">{Attribute}</div>
    <div className="  text-white  text-right">{Value}</div>
  </div>
  )
}

export default FieldDisplay