function MyRecipesComponent({label, image, calories, ingredients, cuisine}) {
    
    return(
        <div>
            <div className="recipe">
                <h2 className="dishName">{label}</h2>
                <h3>{cuisine} cuisine</h3>
                <img className="recipePicture" src={image} alt="" width="350px"/>
                <h4>{calories.toFixed()} calories</h4>            
                <ul>
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>
            </div>
            <hr/> 
        </div>)
}

export default MyRecipesComponent;