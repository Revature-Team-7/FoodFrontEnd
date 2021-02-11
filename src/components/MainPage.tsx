import react, { useState } from "react";

interface IProps {

}

export const MainPage:React.FC = (props:IProps) => {

    const [isHome, setIsHome] = useState(false);
    const [isGoOut, setIsGoOut] = useState(false);
    const [isBreakfast, setIsBreakfast] = useState(false);
    const [isLDinner, setIsLDinner] = useState(false);
    const [isSpinner, setSpinner] = useState(false);

    let foodLink, foodName = "";
    let foodImg = "https://thumbs.gfycat.com/DarlingPolishedHarrierhawk-small.gif";

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

            /*
                const randIndex = Math.round(Math.random()*reponse.data.length);
    
                const data = response.data[randIndex];

                foodName = data.name;

                if(data.url != null)
                {
                    foodUrl = data.url;
                }
                if(data.link != null)
                {
                    foodLink = data.link;
                }
            */
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

                    <div className="row justify-content-center" style={{marginTop: 15}}>
                        <div className="col-4" style={{textAlign:"center"}}>
                            <button className="pageBtn" onClick={Home}>Home</button>
                        </div> 
                        <div className="col-4" style={{textAlign:"center"}}>
                            <p style={{}}>OR</p>
                        </div>
                        <div className="col-4" style={{textAlign:"center"}}>
                            <button className="pageBtn" onClick={GoOut}>Go Out</button>
                        </div> 
                    </div>
                </div>
            </div>

            {isHome || isGoOut ?
            <>
                <div className="upGrad1 pageAni"></div>
                <div className="secondPage pageAni">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3>Time of Day..?</h3>
                        </div>

                        <div className="row justify-content-center" style={{marginTop: 40}}>
                            <div className="col-4" style={{textAlign:"center"}}>
                                <button className="pageBtn" onClick={BreakfastBtn}>Breakfast</button>
                            </div> 
                            <div className="col-4" style={{textAlign:"center"}}>
                                <p style={{}}>OR</p>
                            </div>
                            <div className="col-4" style={{textAlign:"center"}}>
                                <button className="pageBtn" onClick={LDinnerBtn}>Lunch / Dinner</button>
                            </div>
                        </div>
                        {isSpinner ? 
                            <div className="row justify-content-center">
                                <p>Loading...</p>
                            </div>
                        :
                         <></>
                        }
                        
                    </div>
                </div>
            </>
            :
                <></>
            }

            {(isBreakfast || isLDinner) && isHome ?
                <>
                    <div className="upGrad2 pageAni"></div>
                    <div className="thirdPage pageAni">
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3>Data:</h3>
                            </div>

                            <div className="row justify-content-center">
                                <p style={{marginTop: 20, textAlign: "left"}}>Your meal: {foodName}</p>
                            </div>

                            {foodImg === "" ? 
                                <></>
                            :
                                <div className="row justify-content-center">
                                    <img className="foodImg" 
                                    src={foodImg} alt="delicious pic"></img>
                                </div>
                            }
                            
                            <div className="row justify-content-center">
                                <a href={foodLink}>Link to recipe (Click Me)</a>
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
                    <div className="upGrad2 pageAni"></div>
                    <div className="thirdPage pageAni">
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3>Data:</h3>
                            </div>

                            <div className="row justify-content-center">
                                <p style={{marginTop: 20, textAlign: "left"}}>Restaurant Name: {foodName}</p>
                            </div>

                            {foodImg === "" ? 
                                <></>
                            :
                                <div className="row justify-content-center">
                                    <img className="foodImg"
                                    src={foodImg} alt="delicious pic"></img>
                                </div>
                            }

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