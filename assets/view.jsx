import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <rect width={36} height={36} fill="#E7F5FF" rx={8} />
    <path
      stroke="#053559"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.563 8.25H9.186a.937.937 0 0 0-.937.938v6.374c0 .518.42.938.938.938h6.374c.518 0 .938-.42.938-.938V9.189a.937.937 0 0 0-.938-.938ZM26.813 8.25h-6.375a.937.937 0 0 0-.938.938v6.374c0 .518.42.938.938.938h6.375c.517 0 .937-.42.937-.938V9.189a.937.937 0 0 0-.938-.938ZM15.563 19.5H9.186a.937.937 0 0 0-.937.938v6.375c0 .517.42.937.938.937h6.374c.518 0 .938-.42.938-.938v-6.375a.937.937 0 0 0-.938-.937ZM26.813 19.5h-6.375a.937.937 0 0 0-.938.938v6.375c0 .517.42.937.938.937h6.375c.517 0 .937-.42.937-.938v-6.375a.937.937 0 0 0-.938-.937Z"
    />
  </svg>
)
export default SvgComponent
