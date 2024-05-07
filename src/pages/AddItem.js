import { useState } from 'react';
import Alert from '../components/Alert';

function AddItem(props){
    //state variables to store the values inside the inputs
    const [itemName, setItemName] = useState('');
	const [quantity, setQuantity] = useState(0);
	const [description, setDescription] = useState('');

    //for the custom alert
    const [showAlert, setShowAlert] = useState(false);
    const [isValid, setIsValid] = useState(false);

    //these handler functions will constantly update the value inside the state variables whenever there are changes made
    function handleItemNameChange(event){
        setItemName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(parseInt(event.target.value));
    }

    function handleDescriptionChange(event){
        setDescription(event.target.value);
    }

    //function responsible for creating a new item object and adding it to the itemArray
    function addItem(){
        const quantityAsNum = Number(quantity);
        setShowAlert(true);
        if(itemName.trim().length === 0 || quantityAsNum <=  0 || description.trim().length === 0){
            setIsValid(false);
        }else{
            const newItem =  {
                itemName: itemName,
                quantity: quantityAsNum,
                description: description,
            };
    
            props.setItems(i => [...props.itemArr, newItem]);
            
            setItemName("");
            setQuantity(0);
            setDescription("");
            setIsValid(true);
        }
    }

    return(
        <>
            <div className="container-add-item card">
                <h1 className="title">Add New Item:</h1>

                <div className="container-item-name"> 
                    <p>Item Name:</p>
                    <input type="text" value={itemName} onChange={handleItemNameChange}/>
                </div>

                <div className='container-quantity'>
                    <p>Quantity:</p>
                    <input type="number" value={quantity} onChange={handleQuantityChange}/>
                </div>
                <div className="container-desc">
                    <p>Description:</p>
                    <input type="text" value={description} onChange={handleDescriptionChange}/>
                </div>

                <button className="btn-add-item" onClick={addItem}>Add New Item</button>
            </div>
            <Alert isValid={isValid} show={showAlert}/>
        </>
    );
}

export default AddItem;