import styles from "./Avatar.module.css"

interface IPropsType{
    src: string,
    hasBorder: true | false
}
export default function Avatar({src, hasBorder= true } : IPropsType) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}  />
    )
}