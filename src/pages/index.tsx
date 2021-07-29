// SPA - Single Page Application 

// import { useEffect } from "react"
// useEffect(() => {
//   fetch('http://localhost:3333/episodes')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }, [])

// SSR - Server Side Render 

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()
//   return {
//     props: {
//       episodes: data
//     }
//   }
// }

// SSG - Static Site Generation 
// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()
//   return {
//     props: {
//       episodes: data
//     },
//     revalidate: 60 * 60 * 8
//   }
// }

import HomePage from '../components/HomePage'

export default function Home() {
  return (
    <HomePage></HomePage>
  )
}
