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
      fill="#053559"
      d="M20.4 1.2H3.6c-1.32 0-2.4 1.08-2.4 2.4v16.8c0 1.321 1.08 2.4 2.4 2.4H12v-8.4H9.6v-2.97H12V8.97c0-2.597 1.454-4.42 4.52-4.42l2.163.002v3.126h-1.437c-1.192 0-1.646.895-1.646 1.725v2.028h3.082L18 14.4h-2.4v8.4h4.8c1.32 0 2.4-1.079 2.4-2.4V3.6c0-1.32-1.08-2.4-2.4-2.4Z"
    />
  </svg>
)
export default SvgComponent
