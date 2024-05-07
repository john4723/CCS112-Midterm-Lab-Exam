
function Item(props){
    //simple layout to display the item and its properties
    return(
        <div className="container-item">

            <div>
                <p className="item-title">Item Name:</p>
                <p className="item-value">{props.item.itemName}</p>
            </div>

            <div>
                <p className="item-title">Quantity:</p>
                <p className="item-value">{props.item.quantity}</p>
            </div>
            
            <div>
                <p className="item-title">Description:</p>
                <p className="item-value">{props.item.description}</p>
            </div>
        </div>
    );
}

export default Item;