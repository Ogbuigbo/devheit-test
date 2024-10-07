import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#F36"
      d="M5 21V4.875c0-.534.18-.98.54-1.337C5.9 3.179 6.348 3 6.884 3h10.232c.537 0 .985.18 1.344.538.36.357.54.803.54 1.337V21l-7-2.993L5 21Z"
    />
  </svg>
)
export default SvgComponent
