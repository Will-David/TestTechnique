
interface ImgPrps{
    className?:string
    src: string
}

export default function Img({className, src}: ImgPrps) {
    return (
        <img className= {className} src={src}/>
    )
}