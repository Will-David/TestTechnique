import { Link } from "react-router-dom"
import { routesAlias } from "../../routesalias"
import Img from "../forms/Img"

export default function WelcomeLayout() {
    return (
        <>
            <h1 
                className="
                    border text-2x1
                    bg-slate-900 
                    text-center 
                    font-bold p-5
                    text-white
                    text-[30px]
                "
            > 
            <Img className="w-50" src="../Logo-CFP-white-300x59.webp"></Img>
                Bienvenue dans votre Application de gestion de tâches
            </h1> 
            <div className="flex justify-center py-24" >
                <Link 
                    to={routesAlias.task.home} 
                    className="
                        shadow-2xl hover:bg-slate-900  
                        cursor-pointer transition-all 
                        duration-200 bg-slate-900
                        text-white p-2 
                        rounded-lg font-bold
                        text-[30px] animate-bounce
                    "
                >
                    Accédez au gestionnaire de tâches
                </Link>
            </div>


        </>
    )
}