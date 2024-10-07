import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M7 .333a.833.833 0 0 1 .833.834v5h5a.833.833 0 1 1 0 1.666h-5v5a.833.833 0 1 1-1.666 0v-5h-5a.833.833 0 1 1 0-1.666h5v-5A.833.833 0 0 1 7 .333Z"
    />
  </svg>
)
export default SvgComponent
