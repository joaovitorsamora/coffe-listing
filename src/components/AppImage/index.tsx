import React from "react"

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> { 
    src: string
    alt: string
}

export const AppImage: React.FC<AppImageProps> = ({ src, alt, ...props }) => {
    return(
        <img src={src} alt={alt} {...props} />
    )
}