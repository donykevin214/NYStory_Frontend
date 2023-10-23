import { Image } from "./Image.ui"

export interface CardProps{
    title: string,
    image?: string,
    url : string,
}

export const Card: React.FC<CardProps>  = ({ title, image, url }: CardProps) =>{
    return(
        <a className='flex flex-col items-center justify-center w-[300px] h-[300px] border-[1px] rounded-md bg-gradient-to-r from-white-200 from-0%  to-white-300 to-100% shadow-2xl' href={url} target="_blank">
                <Image source={image} className="rounded-t-md"/>
                <span className='font-bold mt-5 text-md'>{title}</span>
        </a>
    )
}