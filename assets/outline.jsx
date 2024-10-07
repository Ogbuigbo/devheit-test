import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#E9E9E9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M12 7v5.75A1.249 1.249 0 0 1 10.75 14h-7.5A1.25 1.25 0 0 1 2 12.75v-7.5A1.25 1.25 0 0 1 3.25 4h5.234M10.5 2H14v3.5M7 9l6.75-6.75"
    />
  </svg>
)
export default SvgComponent
