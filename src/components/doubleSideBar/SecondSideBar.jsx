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
			const mainSbPosition = (document.getElementById("mainSB")).getBoundingClientRect();

			return {position: mainSbPosition};
		};
		default: console.log("No Action Found");
	}
};

const SecondSideBar = () => {
	const [state, dispatch] = useReducer(reducer, null, init);
	console.log(state.position)
	//const nextState = reducer(state);
	//console.log(nextState)


	//console.log((getComputedStyle(document.getElementById("mainSB")).getPropertyValue("--secondSideBarInitialPosition")))
	//console.log(fatherPosition)

	//const [mainSideBarProps, setMainSideBarProps] = useState();
	//const [mainSideBarPosition, setMainSideBarPosition] = useState();

	useEffect(() => {
		//Get Main SideBar Props
		dispatch({type: "newPosition"})
		//setMainSideBarProps((document.getElementById("mainSB")).getBoundingClientRect());
	}, []);

	console.log("SECOND SIDEBAR LOADED")
	return(
		<>
			{
				(
					<div className="secondSideBar">
						OLACRAYOLA
					</div>
				)
			}
		</>
	)
}

export default SecondSideBar