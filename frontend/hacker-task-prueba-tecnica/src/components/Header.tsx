import { link, header, IconButton} from "./Header.css" 
import { FiClipboard } from "react-icons/fi"

export const Header = () => {

    return (
        <nav className={header}>
            <a href="" className={link}>
                Hacker Tasks
            </a>
            <FiClipboard onClick={() => console.log("hola")} className={IconButton} size={35}/>
        </nav>
    )
}
