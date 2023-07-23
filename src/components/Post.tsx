import { useState } from "react"
import { IPostType } from "../App"
import Avatar from "./Avatar"
import Comment from "./Comment"
import styles from "./Post.module.css"
 
export default function Post( post : IPostType) {
    
    const[comments, setComments] = useState<string[]>([]);
    const[comment, setComment] = useState<string>("");
    
    function onSubmit(event : React.FormEvent) {
        event.preventDefault()
        setComments([...comments, comment])
        setComment("")
    }
    function handleNewCommentInvalid(event : any) {
       event.target.setCustomValidity("Esse campo é obrigatorio")
    }

   
    function deleteComments(commentDelete : string) {
        const newComments = comments.filter(comment=> comment != commentDelete)
        setComments(newComments)
    }
    return (
        <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar hasBorder src={post.author.avatarUrl} />
                        <div className={styles.authorInfo}>
                            <strong>{post.author.name}</strong>
                            <span>{post.author.role}</span>
                        </div>
                    </div>
                    <time>Publicado a 1h</time>
                </header>
                <div className={styles.content}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid sit nemo cumque tenetur repellat corrupti, animi accusantium asperiores iste. Quam, eius laborum saepe nostrum pariatur atque in totam maxime.</p>

                <p>Lorem ipsum dolor sit amet.</p>
                <a href="#">#htmlhj</a> {" "} <a href="#">hpstorm</a>
      
                </div>
                <form onSubmit={onSubmit} className={styles.commentForm}>
                        <strong>Deixe Seu comentário</strong>
                        <textarea required onInvalid={handleNewCommentInvalid} onChange={(event)=> setComment(event.target.value)} value={comment} name="comment" placeholder="Deixe seu comentario"/>
                        <footer>
                            <button disabled={comment.length===0} type="submit">Comentar</button>
                        </footer>
                 </form>


                 <div className={styles.commentList}>
                    {comments.map((comment,index) => <Comment deleteComment={deleteComments} key={index} comment={comment}/>)}
                 </div>
             </article>
    )   
}