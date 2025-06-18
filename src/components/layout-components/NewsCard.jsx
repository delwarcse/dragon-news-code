import { FaBookmark, FaEye, FaShare, FaShareAlt, FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
    const {
        title,
        details,
        total_view,
        image_url,
        author,
        rating,
        // others_info,
    } = news;

    return (
        <div className="  bg-white rounded-lg shadow-md overflow-hidden mt-3 mb-6">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100">
                <div className="flex items-center space-x-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">{author.name}</h3>
                        <p className="text-xs text-gray-500">{author.published_date.split("YYYY-MM-DD HH:MM:SS")[0]}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-lg">

                    <button  title="Bookmark"><FaBookmark></FaBookmark></button>
                    <button  title="Share"><FaShareAlt></FaShareAlt></button>

                </div>
            </div>

            {/* Body */}
            <div className="px-4 py-3">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
                <img
                    src={image_url}
                    alt="news"
                    className="w-full h-52 object-cover rounded-md mb-3"
                />
                <p className="text-sm text-gray-600">
                       <br />
                    {details.length > 150 ? details.slice(0, 150) + "..." : details}
                 
                    <span className="text-orange-500 font-medium cursor-pointer ml-1">Read More</span>
                </p>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center text-orange-500 space-x-1">
                    <FaStar />
                    <span className="ml-1 font-semibold text-gray-800">{rating.number}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <FaEye />
                    <span className="ml-1">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
