import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import Avatar from "./Avatar"
import {useState} from "react"
export default function Comment({comment, deleteComment} : {comment: string,deleteComment: (comment:string)=>void}) {
    function handleOnClickDelete() {
        deleteComment(comment)
    }

    const[likesUp, setLikesUp] = useState(0)

    return(
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
             <div className={styles.commentBox}>
                            <div className={styles.commentContent}>
                                <header>
                                    <div className={styles.authorAndTime}>
                                        <strong>Diego Fernando</strong>
                                        <time>Cerca de 1h atrás</time>
                                    </div>
                                    <button onClick={handleOnClickDelete}><Trash size={24}/></button>
                                </header>
                                <p>{comment} </p>
                        </div>
                <footer>
                    <button onClick={()=> setLikesUp(likesUp+1)}><ThumbsUp size={20}  />
                        Aplaudir <span>{likesUp}</span>
                    </button>        
                </footer>
           </div>
        </div>
    )
        }