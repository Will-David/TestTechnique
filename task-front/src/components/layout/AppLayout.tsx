import { Outlet } from "react-router-dom";
import Body from "./Body";
import Img from "../forms/Img";

export default function AppLayout() {
    return (
    <>
    <Body>
        <h1 
            className="
                border text-2x1
                bg-slate-900
                text-center 
                text-white
                font-bold p-5 
                text-[30px]
            "
        >
            <Img className="w-50" src="../Logo-CFP-white-300x59.webp"></Img>
            GFP - Task Manager
        </h1>
        <Outlet/>
    </Body>
    </>
    )
}