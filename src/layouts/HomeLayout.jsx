import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import MainContent from "../components/layout-components/MainContent";
import RightNavbar from "../components/layout-components/RightNavbar";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <section className="w-11/12 mx-auto py-2">
                    <NavBar></NavBar>
                </section>
            </nav>
            <main className="w-11/12 mx-auto py-2 grid md:grid-cols-12 gap-4 md:gap-x-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="main col-span-6">
                    <MainContent></MainContent>
                </section>
                <aside className="left col-span-3">
                   <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;