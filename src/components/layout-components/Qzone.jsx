import swim from "../../assets/swimming.png"
import classRoom from "../../assets/class.png"
import play from "../../assets/playground.png"
import add from "../../assets/bg.png"

const Qzone = () => {
    return (
        <div className="flex flex-col bg-gray-100 p-3 mt-8">
             <h2 className="font-semibold  py-3">Q-Zone</h2>
<img className="h-60 w-full" src={swim} alt="" />
<img className="h-60 w-full" src={classRoom} alt="" />
<img className="h-60 w-full" src={play} alt="" />
<img className="h-full w-full" src={add} alt="" />
        </div>
    );
};

export default Qzone;