import { useState } from 'react';
import { AddCategory, GifGrid ,} from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //categories.push(newCategory) no se hace;
        //console.log(newCategory);
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
    }
    
    return (
        <>
            
            <h1>GifExpertApp</h1>
            
            <AddCategory onNewCategory={ event => onAddCategory(event)}/>
            
            
            { 
                categories.map( category => (
                    <GifGrid category={category} key={category}/>
                ))   
            }
            
            

        </>
    )
}
