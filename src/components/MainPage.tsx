import axios from "axios";
import react, { useRef, useState } from "react";

interface IProps {

}

export const MainPage:React.FC = (props:IProps) => {

    const [isHome, setIsHome] = useState(false);
    const [isGoOut, setIsGoOut] = useState(false);
    const [isBreakfast, setIsBreakfast] = useState(false);
    const [isLDinner, setIsLDinner] = useState(false);
    const [isSpinner, setSpinner] = useState(false);
    const [isSlidingOut, setSliding] = useState("");

    const [foodLink, setFoodLink] = useState("");
    const [foodName, setFoodName] = useState("");
    const [foodImg, setFoodImg] = useState("https://thumbs.gfycat.com/DarlingPolishedHarrierhawk-small.gif");

    const Home = () => {
        setIsHome(true);
    }

    const GoOut = () => {
        setIsGoOut(true);
    }

    const BreakfastBtn = () => {

        if(isHome)
        {
            if(isSpinner == false && isSlidingOut != "leave")
            {
                setSpinner(true);
                axios.get("http://localhost:5000/home/breakfast")
                .then((response)=>{

                    const randIndex = Math.floor(Math.random()*response.data.length);
                    const data = response.data[randIndex];

                    setFoodName(data.foodName);

                    if(data.img_url != null)
                    {
                        setFoodImg(data.img_url);
                    }
                    if(data.recipe != null)
                    {
                        setFoodLink(data.recipe);
                    }
                    setSpinner(false);
                    setIsBreakfast(true);
                })
                .catch((e)=>{
                    setSpinner(false);
                    alert(e);
                })
            }
            
        }
        else if(isGoOut)
        {
            if(isSpinner == false && isSlidingOut != "leave")
            {
                setSpinner(true);
                axios.get("http://localhost:5000/goOut/breakfast")
                .then((response)=>{

                    const randIndex = Math.floor(Math.random()*response.data.length);
                    const data = response.data[randIndex];

                    setFoodName(data.restaurantName);

                    if(data.imgUrl != null)
                    {
                        setFoodImg(data.imgUrl);
                    }
                    setSpinner(false);
                    setIsBreakfast(true);
                })
                .catch((e)=>{
                    setSpinner(false);
                    alert(e);
                })
            }
        }
    }

    const LDinnerBtn = () => {

        if(isHome)
        {
            if(isSpinner == false && isSlidingOut != "leave")
            {
                setSpinner(true);
                axios.get("http://localhost:5000/home/dinner")
                .then((response)=>{

                    const randIndex = Math.floor(Math.random()*response.data.length);
                    const data = response.data[randIndex];

                    setFoodName(data.foodName);

                    if(data.img_url != null)
                    {
                        setFoodImg(data.img_url);
                    }
                    if(data.recipe != null)
                    {
                        setFoodLink(data.recipe);
                    }
                    setSpinner(false);
                    setIsLDinner(true);
                })
                .catch((e)=>{
                    setSpinner(false);
                    alert(e);
                })
            }
        }
        else if(isGoOut && isSlidingOut != "leave")
        {
            if(isSpinner == false)
            {
                setSpinner(true);
                axios.get("http://localhost:5000/goOut/dinner")
                .then((response)=>{

                    const randIndex = Math.floor(Math.random()*response.data.length);
                    const data = response.data[randIndex];

                    setFoodName(data.restaurantName);

                    if(data.imgUrl != null)
                    {
                        setFoodImg(data.imgUrl);
                    }
                    setSpinner(false);
                    setIsLDinner(true);
                })
                .catch((e)=>{
                    setSpinner(false);
                    alert(e);
                })
            }
        }
    }

    const Reset = () => {
        setFoodImg("");
        setFoodLink("");
        setFoodName("");
        setSliding("leave");

        setTimeout(()=>{
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
            setSliding("");
        }, 380);
    }

    return(
        <>
            <div className="mainPage">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="title" style={{textAlign:"center"}}>Food Generator</h1>
                    </div>

                    <div className="row justify-content-center">
                        <h3 style={{margin:10, fontSize: 35}}>Hungry?</h3>
                    </div>
                    <div className="row justify-content-center">
                        <h6>Let us decide....</h6>
                    </div>

                    <div className="row justify-content-center" style={{marginTop: 15}}>
                        <div className="col-3" style={{textAlign:"center"}}>
                            <button className="pageBtnL" onClick={Home}>Home</button>
                            <div className="shadowL" />
                        </div> 
                        <div className="col-1 my-auto" style={{textAlign:"center"}}>
                            <p>OR</p>
                        </div>
                        <div className="col-3" style={{textAlign:"center"}}>
                            <button className="pageBtnR" onClick={GoOut}>Go Out</button>
                            <div className="shadowR" />
                        </div> 
                    </div>
                </div>
            </div>

            {isHome || isGoOut ?
            <>
                <div className={`upGrad1 pageAni ${isSlidingOut}`}></div>
                <div className={`secondPage pageAni ${isSlidingOut}`}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3 style={{marginTop:10}}>Time of Day..?</h3>
                        </div>

                        <div className="row justify-content-center" style={{marginTop: 40}}>
                            <div className="col-3" style={{textAlign:"center"}}>
                                <button className="pageBtnL" onClick={BreakfastBtn}>Breakfast</button>
                                <div className="shadowL" />
                            </div> 
                            <div className="col-1 my-auto" style={{textAlign:"center"}}>
                                <p style={{verticalAlign:"middle"}}>OR</p>
                            </div>
                            <div className="col-3" style={{textAlign:"center"}}>
                                <button className="pageBtnR" onClick={LDinnerBtn}>Lunch / Dinner</button>
                                <div className="shadowR" />
                            </div>
                        </div>
                        {isSpinner ? 
                            <div className="row justify-content-center">
                                <p>Loading...</p>
                            </div>
                        :
                         <></>
                        }

                        <div className="row justify-content-center">
                            <button className="resetBtn" 
                                onClick={Reset}>GO BACK</button>
                        </div>
                        
                    </div>
                </div>
            </>
            :
                <></>
            }

            {(isBreakfast || isLDinner) && isHome ?
                <>
                    <div className={`upGrad2 pageAni ${isSlidingOut}`}></div>
                    <div className={`thirdPage pageAni ${isSlidingOut}`}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3 style={{marginTop:10}}>Your meal:</h3>
                            </div>

                            <div className="row justify-content-center">
                                <h4 style={{marginTop: 20, textAlign: "left"}}>{foodName}</h4>
                            </div>

                            {foodImg === "" ? 
                                <></>
                            :
                                <div className="row justify-content-center">
                                    <img className="foodImg" 
                                    src={foodImg} alt="delicious pic"></img>
                                </div>
                            }
                            
                            {foodLink != "null" ? 
                                <div className="row justify-content-center">
                                    <a href={foodLink} style={{margin: 6}}
                                    target="_blank">Link to recipe (Click Me)</a>
                                </div>
                            :
                                <></>
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

            {(isBreakfast || isLDinner) && isGoOut ?
                <>
                    <div className={`upGrad2 pageAni ${isSlidingOut}`}></div>
                    <div className={`thirdPage pageAni ${isSlidingOut}`}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <h3 style={{marginTop:10}}>Your restaurant:</h3>
                            </div>

                            <div className="row justify-content-center">
                                <h4 style={{marginTop: 20, textAlign: "left"}}>{foodName}</h4>
                            </div>

                            {foodImg === "" ? 
                                <></>
                            :
                                <div className="row justify-content-center">
                                    <img className="foodImg" style={{margin: 6}}
                                    src={foodImg} alt="delicious pic"></img>
                                </div>
                            }

                            <div className="row justify-content-center">
                                <button className="resetBtn" style={{margin: 6}}
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