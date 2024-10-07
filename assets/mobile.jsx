import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={62}
    fill="none"
    {...props}
  >
    <path
      stroke="#053559"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.333}
      d="M31 2.167A28.833 28.833 0 1 1 2.167 31"
    />
  </svg>
)
export default SvgComponent
