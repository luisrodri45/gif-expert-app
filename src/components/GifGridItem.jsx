import { ButtonGridItem } from "./ButtonGridItem"


export const GifGridItem = ({title,url,id,deleteImage}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        <ButtonGridItem id={id} deleteItem={deleteImage}/>
    </div>
  )
}
