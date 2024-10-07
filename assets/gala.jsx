import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke="#0D1821"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M4.5 1.5h15c1.662 0 3 1.338 3 3v15c0 1.662-1.338 3-3 3h-15c-1.662 0-3-1.338-3-3v-15c0-1.662 1.338-3 3-3ZM6 6h1.5" />
      <path d="M9 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM10.5 6H18M18 12h-1.5M15 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.5 12H6M6 18h1.5M9 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM10.5 18H18" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
