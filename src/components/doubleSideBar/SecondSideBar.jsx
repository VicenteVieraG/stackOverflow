import {useReducer, useEffect, useRef} from 'react'
import "../../styles/DSB.css"

const init = () => {
	return {
		position: null
	}
}

const reducer = (state, action) => {
	switch(action.type){
		case "newPosition": {
			console.log("NEW POSITION ACTION")

			//Getting the Component
			const comp = document.getElementById("mainSB");
			const root = document.querySelector(":root");

			//Get the Component Measures and Setting CSS Varibles their Values
			const mainSbPosition = comp.getBoundingClientRect();
			root.style.setProperty("--secondSB-R", mainSbPosition.right);

			return {position: mainSbPosition};
		};
		case "activate": {
			console.log("Active")
			action.secondSbRef.current.style.setProperty("--width", "auto");
			break;
		};
		case "disable": {
			console.log("Disable")
			action.secondSbRef.current.style.setProperty("--width", "0");
			break;
		};
		default: console.log("No Action Found");
	}
};

const SecondSideBar = ({compRef, active}) => {
	const [state, dispatch] = useReducer(reducer, null, init);
	const secondSbRef = useRef(null);
	
	useEffect(() => {
		//Exit if the Component Is not Ready
		if(!compRef.current) return;

		//Create an Observer to get the dimensions of the MainSideBar whenever these change
		const resizeObserver = new ResizeObserver(() => dispatch({type: "newPosition"}));
		resizeObserver.observe(compRef.current);

		//CleanUp Function
		return () => resizeObserver.disconnect();
	}, []);

	useEffect(() => {
		(active !== "7")? 
		dispatch({type: "activate", secondSbRef}) 
		: 
		dispatch({type: "disable", secondSbRef});
	},[active]);

	return(
		<>
			<div ref={secondSbRef} className="secondSideBar">
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
				<div>OLACRAYOLA</div>
			</div>
		</>
	)
}

export default SecondSideBar;