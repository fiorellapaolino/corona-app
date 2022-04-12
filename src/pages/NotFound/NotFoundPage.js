import NotFoundImg from '../../assets/image.svg'
import './NotFoundPage.scss'
import {
    Link
} from "react-router-dom";

function notFoundPage() {
    return (
        <div className="notFoundPage">
            <div className="container">
                <h1>... Oops! Error 404 Not Found</h1>
                <h2>We continue investigating for all</h2>
                <h4>Return to the <Link to="/Home" className="gobackhome">Home page</Link><span>.</span></h4>
            </div>
            <img src={NotFoundImg} alt="" />
        </div>
    );
}

export default notFoundPage;
