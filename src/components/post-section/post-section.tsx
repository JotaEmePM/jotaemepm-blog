import { useEffect, useState } from 'react'
import { getAllPost } from '../../services/post-service'
import { PostInterface } from '../../interfaces/Post.interace'

export const PostSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState()

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await getAllPost()
      
      setPosts(data)
      setIsLoading(false)      
    }

    fetchData()
      .catch(console.error);
  }, [])


  console.log(posts)
  return (
    <>
      <h2>Ultimas entradas</h2>
      <section>
        {
          (isLoading) ? 
            <h6>cargando...</h6> : 
            posts?.docs?.map(({
              title,
              subtitle,
              publicationDate,
              slug,
              image,
              trimcontent
            }: PostInterface) => {
              return (
                <article key={slug}>
                  <picture>
                    <img src={image} title={slug} />
                  </picture>
                  <h2>
                    <a href={`/${slug}`}>{title}</a>
                  </h2>
                  <h3>
                    {subtitle} {publicationDate}
                  </h3>
                  <p>{trimcontent}</p>
                  <a href={`/${slug}`}>ver más...</a>
                </article>
              )
            })

        }
      </section>
    </>
  )
}
/*
*/