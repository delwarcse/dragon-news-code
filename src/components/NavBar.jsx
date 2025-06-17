import { Link } from "react-router";
import userIcon from "../assets/user.png"

const NavBar = () => {
    return (
        <div className="flex justify-between">
            <div className=""></div>
            <div className="nav space-x-3">
                <Link to='/'>Home</Link>
                <Link to='/career'>Carrer</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-3 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className="btn btn-neutral">Login</button>

            </div>
        </div>
    );
};

export default NavBar;