import * as React from "react"
const Close = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#EAECF0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.063 3.938 3.937 14.062M14.063 14.063 3.937 3.937"
    />
  </svg>
)
export default Close
