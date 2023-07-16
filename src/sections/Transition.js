import "./transition.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Transition = () => {

    const navigate = useNavigate(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
        navigate('/home'); // Replace '/' with the URL of your main page
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (

        <>
        <div className="cup">
            <div className="handle"></div>

        </div>
        <div className="welcome">
            <p>Sit tight and grab a cup of coffee</p>
        </div></>
    )
}

export default Transition;