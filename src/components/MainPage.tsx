import react, { useState } from "react";

interface IProps {

}

export const MainPage:React.FC = (props:IProps) => {

    const [isHome, setIsHome] = useState(false);
    const [isGoOut, setIsGoOut] = useState(false);
    const [isBreakfast, setIsBreakfast] = useState(false);
    const [isLDinner, setIsLDinner] = useState(false);
    const idk = "";

    const Home = () => {
        setIsHome(true);
    }

    const GoOut = () => {
        setIsGoOut(true);
    }

    const BreakfastBtn = () => {
        setIsBreakfast(true);

        if(isHome)
        {
            //api call 1
        }
        else if(isGoOut)
        {
            //api call 2
        }
    }

    const LDinnerBtn = () => {
        setIsLDinner(true);

        if(isHome)
        {
            //api call 1
        }
        else if(isGoOut)
        {
            //api call 2
        }
    }

    const Reset = () => {
        if(isHome)
        {
            setIsHome(false);
        }
        if(isGoOut)
        {
            setIsGoOut(false);
        }
        if(isBreakfast)
        {
            setIsBreakfast(false);
        }
        if(isLDinner)
        {
            setIsLDinner(false);
        }
        
    }

    return(
        <>
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
                            <button onClick={GoOut}>Go Out</button>
                        </div> 
                    </div>
                </div>
            </div>

            {isHome || isGoOut ?
            <>
                <div className="upGrad1"></div>
                <div className="secondPage">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3>Time of Day..?</h3>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-4">
                                <button onClick={BreakfastBtn}>Breakfast</button>
                            </div> 
                            <div className="col-4">
                                <p style={{}}>OR</p>
                            </div>
                            <div className="col-4">
                                <button onClick={LDinnerBtn}>Lunch / Dinner</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            :
                <></>
            }

            {(isBreakfast || isLDinner) && isHome ?
                <>
                    <div className="upGrad2"></div>
                    <div className="thirdPage">
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3>Data:</h3>
                            </div>

                            <div className="row justify-content-center">
                                <p style={{marginTop: 20, textAlign: "left"}}>Your meal:</p>
                            </div>

                            <div className="row justify-content-center">
                                <img src={idk} alt="delicious pic"></img>
                            </div>

                            <div className="row justify-content-center">
                                <a href={idk}>Link to recipe (Click Me)</a>
                            </div>

                            <div className="row justify-content-center">
                                <button className="resetBtn" 
                                onClick={Reset}>RESET</button>
                            </div>
                        </div>
                    </div>
                </>
            :
                <></>
            }

            {(isBreakfast || isLDinner) && isGoOut ?
                <>
                    <div className="upGrad2"></div>
                    <div className="thirdPage">
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3>Data:</h3>
                            </div>

                            <div className="row justify-content-center">
                                <p style={{marginTop: 20, textAlign: "left"}}>Restaurant Name: {idk}</p>
                            </div>

                            <div className="row justify-content-center">
                                <img src={idk} alt="restaurant pic"></img>
                            </div>

                            <div className="row justify-content-center">
                                <button className="resetBtn" 
                                onClick={Reset}>RESET</button>
                            </div>
                        </div>
                    </div>
                </>
            :
                <></>
            }
        </>
    )
}