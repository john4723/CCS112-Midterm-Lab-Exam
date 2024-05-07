import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
	//mock data
	let data = [
		{
			itemName: "Pon De Rings",
			quantity: 3,
			description: "Also known as Poi mochi."
		},
		{
			itemName: "La Lettre a Focalors",
			quantity: 2,
			description: "A small cake, shaped into a long rectangle."
		},
		{
			itemName: "Pate de Fruit",
			quantity: 5,
			description: "A gummy candy."
		},
		{
			itemName: "Tasses Ragout",
			quantity: 1,
			description: "A dish of fresh raw meat."
		},
		{
			itemName: "Coffee Bavarois",
			quantity: 3,
			description: "A refreshing dessert."
		},
		{
			itemName: "Rainbow Macarons",
			quantity: 3,
			description: "Small, multi-colored round pastries."
		},
	]

	//state variable for the inventory
	const [items, setItems] = useState(data);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home itemArr={items}/>}/>
				<Route path="/AddItem" element={<AddItem itemArr={items} setItems={setItems}/>}/>
			</Routes>
		</>
	);
}

export default App;
