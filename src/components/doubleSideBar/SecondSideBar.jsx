import {useReducer, useEffect} from 'react'
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
			root.style.setProperty("--secondSB-L", mainSbPosition.left);
			root.style.setProperty("--secondSB-R", mainSbPosition.right);
			root.style.setProperty("--secondSB-T", mainSbPosition.top);
			root.style.setProperty("--secondSB-B", mainSbPosition.bottom);

			console.log(getComputedStyle(root).getPropertyValue("--secondSB-L"))
			console.log(getComputedStyle(root).getPropertyValue("--secondSB-R"))
			console.log(getComputedStyle(root).getPropertyValue("--secondSB-T"))
			console.log(getComputedStyle(root).getPropertyValue("--secondSB-B"))

			return {position: mainSbPosition};
		};
		default: console.log("No Action Found");
	}
};

const SecondSideBar = ({compRef}) => {
	const [state, dispatch] = useReducer(reducer, null, init);

	useEffect(() => {
		//Exit if the Component Is not Ready
		if(!compRef.current) return;

		//Create an Observer to get the dimensions of the MainSideBar whenever these change
		const resizeObserver = new ResizeObserver(() => dispatch({type: "newPosition"}));
		resizeObserver.observe(compRef.current);

		//CleanUp Function
		return () => resizeObserver.disconnect();
	}, []);

	console.log("SECOND SIDEBAR LOADED")
	return(
		<>
			<div className="secondSideBar">
				OLACRAYOLA
			</div>		
		</>
	)
}

export default SecondSideBar