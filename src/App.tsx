// import { useEffect } from 'react'

import { PostSection } from "./components/post-section/post-section"


// const TRACKING_ID = 'G-T3NH8TRGKQ'


function App() {

  // useEffect(() => {
  //   //reactGa.ReactGA.pageview(window.location.pathname)
  // }, [])

  return (
    <>
      <header>
        JotaEmePM's Blog
      </header>
      <main>
        <PostSection />
      </main>
    </>
  )
}

export default App
