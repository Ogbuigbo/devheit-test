import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#053559"
      d="M28 25.334v1.333H4v-1.333l2.667-2.667v-8a9.32 9.32 0 0 1 6.666-8.947v-.386a2.667 2.667 0 0 1 5.334 0v.386a9.32 9.32 0 0 1 6.666 8.947v8L28 25.334ZM18.667 28a2.667 2.667 0 0 1-5.334 0"
    />
    <circle cx={24} cy={9} r={4.5} fill="#F36" stroke="#FAFAFA" />
  </svg>
)
export default SvgComponent
