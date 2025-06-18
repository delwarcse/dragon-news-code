import { useLoaderData } from "react-router";
import NewsCard from "./NewsCard";
const MainContent = () => {
    const {data:news} = useLoaderData();
    // console.log(news);
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <h3 className="text-sm text-gray-500">{news.length} Total News Found</h3>
            <div>
                {
                    news.map(singleNews=>
                    <NewsCard key={singleNews._id} 
                    news={singleNews}>
                    </NewsCard>)
                }
            </div>
        </div>
    );
};

export default MainContent;