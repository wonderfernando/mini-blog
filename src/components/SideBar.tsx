import Avatar from "./Avatar"
import styles from "./SideBar.module.css"
import { PencilLine } from "phosphor-react"
export default function SideBar() {
    return (
    <aside className={styles.sideBar}>
       <img className={styles.cover} src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
       <div className={styles.profile}>
            <Avatar hasBorder src="https://github.com/diego3g.png" />
            <strong>Fernnado Silva</strong>
            <span>Web Developer</span>
       </div>
       <footer>
            <a href="#"><PencilLine size={25}/> Editar seu Perfil</a>
       </footer>
    </aside>
)}