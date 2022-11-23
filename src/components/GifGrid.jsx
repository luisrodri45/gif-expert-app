
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

    const { images, isLoading, deleteImage} = useFetchGifs(category);

    const categoryNoSpaces = category.replace(/\s+/g, '');

    const noResults = images.length == 0 ? true : false;

    /* console.log(isLoading);
    console.log(images.length);
    console.log('hay o no',noResults); 
    
    */
   
    
    
    return (
        <>

            <button className="btn btn-outline-primary button-style" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${categoryNoSpaces}`} aria-expanded="true" aria-controls="collapseExample">
                {category}
            </button>

            {
                isLoading && (
                    <div className='d-flex justify-content-center'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <span className='m-1'>Loading...</span>
                  </div>
                )
            }
            
            <div className="card-grid collapse" id={`collapse${categoryNoSpaces}`}>
                {
                    noResults &&(
                        <div>
                        <span className='m-1'>No results</span>
                        </div>
                    )
                }
                {
                    images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                        deleteImage = {deleteImage}
                    />
                    ))
                }
            </div>
        </>
    )
}
