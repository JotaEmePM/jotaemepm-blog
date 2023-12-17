import { useEffect } from 'react'
import ReactGA from 'react-ga'

const TRACKING_ID = 'G-T3NH8TRGKQ'
ReactGA.initialize(TRACKING_ID)

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <>
      <div className='sticky top-0'>
        <section id="header" className='bg-header h-32 md:h-48 flex items-center justify-center'>
          <header className='text-center pt-4 pb-4 md:pt-7 md:pb-7 w-full'>
            <h1 className='text-4xl md:text-6xl font-mooli font-bold text-white tracking-wide'>JotaEmePM's Blog</h1>
          </header>
        </section>
        <nav className='bg-slate-400 pl-4 pr-4 h-24 md:h-16 w-full flex flex-col md:flex-row items-center justify-between'>
          <ul className='flex flex-row justify-center pt-3 pb-3'>
            <li className='text-xl md:text-2xl ml-5 tracking-wide'>Inicio</li>
            <li className='text-xl md:text-2xl ml-5 tracking-wide'>Tags</li>
            <li className='text-xl md:text-2xl ml-5 tracking-wide'>Links</li>
            <li className='text-xl md:text-2xl ml-5 tracking-wide'>Perfil profesional</li>
          </ul>
          <input placeholder='buscar' type='text' value='' className='h-10 pl-4 w-[400px] bg-gray-300 text-black placeholder-slate-500 placeholder:font-mooli mb-2 rounded-md' />
        </nav>
      </div>
      <section id="blog" className='h-screen bg-slate-200'>
        <article>
          <h2>Titulo de la noticia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi rerum quam deleniti ab adipisci voluptatibus natus praesentium porro quidem, quos voluptatem eveniet ea quo at nam alias recusandae atque!</p>
        </article>


      </section>
      <footer className=" sticky bottom-0 p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a rel="noopener" href="https://jotaemepm.dev" className="hover:underline" target="_blank">JotaEmePM</a>. Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Inicio</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Blog</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Contacto</a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default App
