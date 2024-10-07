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
      d="M16 2.667c7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.969 13.334-13.333 13.334a13.28 13.28 0 0 1-6.192-1.523l-5.72 1.49a1.132 1.132 0 0 1-1.383-1.382L4.193 22.2A13.279 13.279 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667Zm1.67 14.667h-6.003l-.136.009a1 1 0 0 0 0 1.981l.136.01h6.002l.135-.01a1 1 0 0 0 0-1.981l-.135-.01Zm2.663-4.667h-8.666l-.136.01a1 1 0 0 0 0 1.98l.136.01h8.666l.136-.01a1 1 0 0 0 0-1.98l-.136-.01Z"
    />
    <circle cx={26} cy={6} r={4.5} fill="#F36" stroke="#FAFAFA" />
  </svg>
)
export default SvgComponent
