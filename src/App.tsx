

import  Sidebar  from './components/SideBar'
import './App.css'
import Header from './components/Header'
import styles from "./components/app.module.css"
import Post from './components/Post'

export interface IPostType{
  id: number,
  author: {
    name: string,
    avatarUrl: string,
    role: string
  },
  content: any,
  publishedAt: Date,
}
function App() {

  
  const posts : IPostType[] = [
    {
      id: 1,
      author: {
        name: "Fernando Silva",
        avatarUrl: "https://github.com/diego3g.png",
        role: "CEO @Rocketseat"
      },
       content: [
        {
          type: "paragraph",
          content: "Fala Galera !!!!",
        },
        {
          type: "paragraph",
          content: "Acabei de Subir mais um projecto de meu portifa. É um projecto que desenlvolvi usano React"
        },{
          type: "Link",
          content: "Jane.Design/medicare",
        },
      ],
      publishedAt: new Date("2023-07022 20:30:30")
    },{
      id: 2,
      author: {
        name: "Mayk Brioto",
        avatarUrl: "https://github.com/maykbrito.png",
        role: "Educator @Rocketseat"
      },
      content: [
        {
          type: "paragraph",
          content: "Fala Galera !!!!",
        },
        {
          type: "paragraph",
          content: "Acabei de Subir mais um projecto de meu portifa. É um projecto que desenlvolvi usano React"
        },{
          type: "Link",
          content: "Jane.Design/medicare",
        },
      ],
      publishedAt: new Date("2023-07022 20:30:30")
    }
  ]
  return (
   <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main className={styles.posts}>
            {
              posts.map(poster => <Post author={poster.author} content={poster.content} publishedAt={poster.publishedAt} id={poster.id} key={poster.id} />)
            }
        </main>
      </div>
    </div>
    
  )
}

export default App
