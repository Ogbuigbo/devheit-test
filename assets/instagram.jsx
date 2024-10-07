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
      d="M30.187 15.76A5.704 5.704 0 0 1 28.773 12h-4.12v16.533a3.457 3.457 0 0 1-3.453 3.334 3.477 3.477 0 0 1-3.467-3.467c0-2.293 2.214-4.013 4.494-3.307V20.88c-4.6-.613-8.627 2.96-8.627 7.52 0 4.44 3.68 7.6 7.587 7.6 4.186 0 7.586-3.4 7.586-7.6v-8.387a9.8 9.8 0 0 0 5.734 1.84v-4.12s-2.507.12-4.32-1.973Z"
    />
  </svg>
)
export default SvgComponent
