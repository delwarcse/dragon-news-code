import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mt-8 mb-3">Find Us On</h2>
            <div className="join join-vertical flex">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;