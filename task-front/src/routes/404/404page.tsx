import { routesAlias } from "../../routesalias"
import { Link } from "react-router-dom"

export default function ErrorPage()
{
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
            <h1 className="text-6xl font-bold mb-4">Erreur: 404</h1>
            <p className="text-lg text-gray-600 mb-6">La page demandée est introuvable...</p>
            <Link 
                to = {routesAlias.home}
                className="
                underline text-blue-500"
                >
                Revenir à la page d'Accueil
            </Link>
        </div>
    )
} 