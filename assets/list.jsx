import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      stroke="#053559"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 12h12m-16 .01.01-.011M10 18.01l.01-.011M10 24.01l.01-.011M14 18h12m-12 6h12"
    />
  </svg>
)
export default SvgComponent
