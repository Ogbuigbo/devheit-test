import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <rect width={47} height={47} x={0.5} y={0.5} stroke="#BFBFBF" rx={3.5} />
    <path
      fill="#BFBFBF"
      d="M35.2 9.6H12.8a3.21 3.21 0 0 0-3.2 3.2v22.4c0 1.762 1.44 3.2 3.2 3.2H24V27.2h-3.2v-3.96H24v-3.28c0-3.462 1.94-5.894 6.026-5.894l2.884.003v4.168h-1.915c-1.59 0-2.195 1.193-2.195 2.3v2.705h4.109L32 27.2h-3.2v11.2h6.4c1.76 0 3.2-1.438 3.2-3.2V12.8c0-1.76-1.44-3.2-3.2-3.2Z"
    />
  </svg>
)
export default SvgComponent
