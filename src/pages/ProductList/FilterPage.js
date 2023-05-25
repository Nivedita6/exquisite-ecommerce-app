import "./FilterPage.css";
import { categories } from "../../backend/db/categories";

export const FilterPage = () => {

    const ratingStars = [1, 2, 3, 4];
    return(
        <>
            <div className="filter-container">
                <div className="filter-heading">
                    <h4>FILTERS</h4>
                    <input type="reset" value= "clear" className = "clear-btn"/>
                </div>

                <div className="filter-price">
                    <h4>PRICE RANGE</h4>
                    <div className="flex-gap">
                        <input type="range" min= "300" max = "2000" className="slider"/>
                    </div>
                </div>

                <div className="filter-category">
                    <h4>CATEGORY</h4>
                    <div className="flex-gap">
                        {categories.map(category => {
                            return(
                                <div key={category._id}>
                                    <input type="checkbox" /> {category.categoryName}
                                </div>
                            )
                        })}
                    </div>
                    
                </div>

                <div className="filter-rating">
                    <h4>RATING</h4>
                    <div className="flex-gap">
                        {ratingStars.map(rating =>(
                            <label key = {rating} className="select-input" >
                                <input type = "radio" name = "rating" className="radio-input" />{rating} Stars and above
                            </label>
                        ) )}
                    </div>
                    
                </div>
            </div>
        </>
    )
}