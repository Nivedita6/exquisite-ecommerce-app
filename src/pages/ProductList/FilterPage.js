import "./FilterPage.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export const FilterPage = () => {

    const ratingStars = [1, 2, 3, 4];
    const priceFilterArray = [
        { label: "Low To High", value: "lowToHigh" },
        { label: "High To Low", value: "highToLow" },
    ];
    const {categories,clearFilterHandler, priceRangeFilter, priceFilter, sortByPrice,categoryFilter, filterByCategory, ratingFilter, filterByRatings, filterByPriceRange} = useContext(DataContext);
    return(
        <>
            <div className="filter-container">
                <div className="filter-heading">
                    <h4>FILTERS</h4>
                    <input type="reset" value= "clear" className = "clear-btn" onClick={clearFilterHandler}/>
                </div>

                <div className="filter-price">
                    <h4>PRICE RANGE</h4>
                    <div className="flex-gap">
                        <input type="range" id = "priceRange" min= "300" max = "9000" className="slider" value = {priceRangeFilter} onChange={(e) => filterByPriceRange(e)}/>
                    </div>
                    <div className="range-values">
                        <option value = "0" label="0">0</option>
                        <option value = "3000" label="3000">3000</option>
                        <option value = "6000" label="6000">6000</option>
                    </div>
                </div>

                <div className="filter-category">
                    <h4>CATEGORY</h4>
                    <div className="flex-gap">
                        {categories?.map(category =>  {
                            return (
                                <label key={category._id}>
                                    <input type="checkbox" key = {category.categoryName} value = {category.categoryName} checked = {categoryFilter?.includes(category.categoryName)} onChange = {(e) => filterByCategory(e)} /> {category.categoryName} 
                                </label>
                            )        
                        })}
                    
                    </div>
                    
                </div>

                <div className="filter-rating">
                    <h4>RATING</h4>
                    <div className="flex-gap">
                        {ratingStars.map(rating =>(
                            <label key = {rating} className="select-input" >
                                <input type = "radio" name = "rating" key = {rating} value={rating} className="radio-input"  checked = {Number(ratingFilter) === Number(rating)} onChange={(e) => filterByRatings(e)}/>{rating} Stars and above
                            </label>
                        ) )}
                    </div>   
                </div>

                <div className="filter-sorting">
                    <h4>Sort By</h4>
                    {priceFilterArray.map(({label, value}) => (
                        <label key = {value}>
                            <input type = "radio" key = {value} name = "price-filter" value={value} checked = {priceFilter === value} onChange={(e) => sortByPrice(e)} />
                            Price- {label}
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}