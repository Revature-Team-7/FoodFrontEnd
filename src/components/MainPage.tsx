import react, { useState } from "react";

interface IProps {

}

export const MainPage:React.FC = (props:IProps) => {

    const [isHome, setIsHome] = useState(false);
    const [isGoOut, setIsGoOut] = useState(false);
    const [isBreakfast, setIsBreakfast] = useState(false);
    const [isLDinner, setIsLDinner] = useState(false);
    

    const Home = () => {
        setIsHome(true);
    }

    return(
        <div className="mainPage">
            <h1 style={{textAlign:"center"}}>Food Generator</h1>

            <div className="container">
                <div className="row justify-content-center">
                    <h3>Hungry?</h3>
                </div>
                <div className="row justify-content-center">
                    <h4>Let us decide....</h4>
                </div>

                <div className="row justify-content-center">
                    <div className="col-4">
                        <button onClick={Home}>Home</button>
                    </div> 
                    <div className="col-4">
                        <p style={{}}>OR</p>
                    </div>
                    <div className="col-4">
                        <button>Go Out</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}