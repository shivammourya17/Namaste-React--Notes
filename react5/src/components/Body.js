
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {

    const[listofrestuatent ,setlistofrestuatent] = useState(resList);

    return (
      <div className="body">
        <div className="filter">
                <button
                className="filter-btn"
                onClick = {() => {
                    const filterdata = listofrestuatent.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setlistofrestuatent(filterdata)
                    }}
                >top Rated restaurant</button>
        </div>
        <div className="res-container">
    
  
          {listofrestuatent.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
          
        </div>
      </div>
    );
  };

  export default Body;