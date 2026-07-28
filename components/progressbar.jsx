// "use client"

// import { useEffect, useState } from "react"

// export function ProgressBar() {
//   const [filled, setFilled] = useState(0)

//   useEffect(() => {
//     if (filled >= 100) {
//       return
//     }

//     const timeoutId = window.setTimeout(() => {
//       setFilled(prev => Math.min(prev + 5, 100))
//     }, 50)

//     return () => window.clearTimeout(timeoutId)
//   }, [filled])

//   return (
//     <div
//       className="h-1 bg-primary transition-[width] duration-500 ease-out"
//       style={{ width: `${filled}%` }}
//     />
//   )
// }
