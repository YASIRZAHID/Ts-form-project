import React from 'react'

const StageMarks = ({bulletColor,bulletText,styles}:{bulletColor: string, bulletText:string, styles?:string}) => {
    const bulletStyle:string = `bg-[${bulletColor}] w-4 h-4 rounded `+ styles;
    const textStyles:string = "ml-2 " + styles;
  return (
    <div className="flex flex-row items-center">
    <div className={bulletStyle}></div>
    <div className={textStyles}> {bulletText}</div>
  </div>
  )
}

export default StageMarks