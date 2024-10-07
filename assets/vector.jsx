import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#053559"
      d="M5 15.17 1.83 12 .42 13.41 5 18l4.59-4.59L8.17 12M5 2.83 8.17 6l1.41-1.41L5 0 .41 4.59 1.83 6 5 2.83Z"
    />
  </svg>
)
export default SvgComponent
