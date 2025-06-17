import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <div>
                <h2 className="font-semibold mb-3">Login With</h2>
            </div>
            <div className="flex flex-col gap-2">
                <button className="btn text-blue-700"> <FaGoogle /> Login With Google</button>
                <button className="btn"> <FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;