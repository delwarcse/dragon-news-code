import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center justify-center bg-gray-200 p-2">
            <p className="bg-red-500 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to='/news'> I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/news'> I can be a React component, multiple React components, or just some text.</Link>
                <Link to='/news'> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;