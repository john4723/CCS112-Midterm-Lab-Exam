import { useState } from 'react';
import Item from '../components/Item';

function Home(props){
    //state variable for handling search input
    const [search, setSearch] = useState('');
    
    //function that will handle and assign changes in search bar input to the state variable
    function handleSearchChange(event){
        setSearch(event.target.value.toLowerCase());
    }

    return(
        <>
            <div className="container-search card">
                <h2>Search:</h2>
                <input type="text" onChange={handleSearchChange} className='search-box' placeholder='Place item name here...'/>
            </div>

            <div className="container-main card">
                <h1 className='title'>List of Items</h1>
                {
                    props.itemArr.filter((item)  => {
                        //if search bar is empty, return the item for mapping 
                        //else check if the current item's itemName property 
                        //includes the inputted string in the search bar
                        //before it is included in the mapping process
                        return search === '' ? item : item.itemName.toLowerCase().includes(search)
                    }).map((item, index) => 
                        //maps the items that passes through the filter 
                        <Item key={index} item={item}/>
                    )
                }
            </div>
        </>
            
    );
}


export default Home;