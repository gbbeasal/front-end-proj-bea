import { useState, useEffect } from "react";
import "../styles/catalog.css"
import { faker } from '@faker-js/faker';

export function Lucky() {
    const options = {
        method: "POST",
        headers: {
          "X-RapidAPI-Key": "82d46e589dmsh0c042c0cd30dcebp1840f2jsn9d10782f6aa8",
          "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com"
        }
      };
    
    const [textValue, setTextValue] = useState("");
    const [weeklyUrl, setWeeklyUrl] = useState("");
    const [sunSign, setSunSign] = useState("");
    const [response, setResponse] = useState([]);

    const submitSign = () => {
        setTextValue(textValue);
        setSunSign(textValue);
        setWeeklyUrl(
        `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sunSign}&day=today`
        );
        setTextValue("");
    };

    useEffect(() => {
        fetch(weeklyUrl, options)
          .then((response) => response.json())
          .then((response) => setResponse(response));
      }, [weeklyUrl]);
    
    const Recommendation = () => {
        //console.log(sunSign);
        switch (sunSign.toLowerCase()) {
          case "leo":
            return (
                <div>
                    <img src={faker.image.fashion(450, 450, true)} alt=""/>
                    <h3>{faker.commerce.productName()}</h3>
                    <p className="m-3">The best thing fit for a Leo is {faker.commerce.productDescription()}</p>
                </div>
            );
          case "virgo":
            return (
                <div>
                    <img src={faker.image.fashion(450, 450, true)} alt=""/>
                    <h3>{faker.commerce.productName()}</h3>
                    <p className="m-3">The best thing fit for a Virgo is {faker.commerce.productDescription()}</p>
                </div>
            );
            case "libra":
                return (
                    <div>
                        <img src={faker.image.fashion(450, 450, true)} alt=""/>
                        <h3>{faker.commerce.productName()}</h3>
                        <p className="m-3">The best thing fit for a Libra is {faker.commerce.productDescription()}</p>
                    </div>
                );
            case "scorpio":
                return (
                    <div>
                        <img src={faker.image.fashion(450, 450, true)} alt=""/>
                        <h3>{faker.commerce.productName()}</h3>
                        <p className="m-3">The best thing fit for a Scorpio is {faker.commerce.productDescription()}</p>
                    </div>
                );
            case "aries":
                return (
                    <div>
                        <img src={faker.image.fashion(450, 450, true)} alt=""/>
                        <h3>{faker.commerce.productName()}</h3>
                        <p className="m-3">The best thing fit for a Aries is {faker.commerce.productDescription()}</p>
                    </div>
                );
            case "taurus":
                return (
                    <div>
                        <img src={faker.image.fashion(450, 450, true)} alt=""/>
                        <h3>{faker.commerce.productName()}</h3>
                        <p className="m-3">The best thing fit for a Taurus is {faker.commerce.productDescription()}</p>
                    </div>
                );
            case "gemini":
                return (
                    <div>
                        <img src={faker.image.fashion(450, 450, true)} alt=""/>
                        <h3>{faker.commerce.productName()}</h3>
                        <p className="m-3">The best thing fit for a Gemini is {faker.commerce.productDescription()}</p>
                    </div>
                );
            case "cancer":
                return (
                    <div>
                        <img src={faker.image.fashion(450, 450, true)} alt=""/>
                        <h3>{faker.commerce.productName()}</h3>
                        <p className="m-3">The best thing fit for a Cancer is {faker.commerce.productDescription()}</p>
                    </div>
                );
            default:
                return (
                    <div>
                        <img src=""/>
                        <h5>Find out which product is best for you</h5>
                    </div>
                );
            
        }
    }; 

    return (
        <main class=".container-fluid">
            <div className="text-center m-4">
            <h2>What should you buy next? Let's ask the stars!</h2>
            <p className="m-2">
            Having trouble deciding what to wear? Find your ideal wardrobe essentials by using the stars as your guide.
            We won't find out if you browse the fashions of another zodiac sign <em>(We understand if you've got a bit of Libra in you, you know).</em>
            </p>
            <img src="https://images.milledcdn.com/2018-09-19/jxUA6r2MGaXm2e6q/dY9kbIORFGL3.gif" className="astro" alt=""/>
            </div>
            <div class="row justify-content-center">
                <div className="left-column m-4 col-5">
                    <h3>Let us know your sign, and we'll give you one back...</h3>
                    <p className="text-muted"><em>Comeback everyday for more fun!</em></p>
                    <div class="input-group mt-3 mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button" onClick={submitSign}>Submit</button>
                        </div>
                        <input
                            type="text"
                            class="form-control"
                            onChange={(event) => setTextValue(event.target.value)}
                            placeholder="Enter your Sun Sign"
                            aria-label="Enter your Sun Sign"
                            aria-describedby="basic-addon1"
                            />
                    </div>
                    <div>
                        <p>Hi, there <strong>{sunSign.toUpperCase()}</strong>. {response.current_date}'s looking...</p>
                        <p><strong>Lucky Color:</strong> {response.color}</p>
                        <p><strong>Lucky Number:</strong> {response.lucky_number}</p>
                        <p><strong>Best Time of the Day:</strong> {response.lucky_time}</p>
                        <p><strong>Best Compatibility:</strong> {response.compatibility}</p>
                        <p><strong>Your Overall Mood for the Day:</strong> {response.mood}</p>
                        <p><strong>Your Reading Says:</strong> {response.description}</p>
                    </div>
                </div>
                <div className="right-column m-4 col-5">
                    <div>
                        <Recommendation/>
                    </div>

                </div>
            </div>

        </main>
    





    )
}