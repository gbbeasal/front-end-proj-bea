import { useState, useEffect } from "react";

export function Filler() {
    const [joke, setJoke] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    const getData = async () => {
      setIsLoading(true);
      fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setJoke(data.joke);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Failed to retrieve from icanhazdadjoke.com");
        });
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    if (error.length > 0) {
      return <div className="App">{error}</div>;
    }

    return(
        <div>
            <h1 className="m-4">PAGE UNDER CONSTRUCTION</h1>
            <p className="m-4">Hi! This page is currently under construction, to be ready for Sprint 2 of Project 00-123-45-2022.
            For now, please enjoy a dad joke: </p>
            <div className="text-center m-4 p-5">
                {isLoading ? <p>Loading another dad joke...</p> : <p>{joke}</p>}
                <br />
                <button onClick={getData} id="btn-1" className="rounded-pill">
                    Generate New Joke
                </button>
            </div>  
        </div>
    );
}