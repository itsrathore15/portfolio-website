import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
              <main className="flex flex-col min-h-screen bg-bgDark text-textWhite px-8 py-10">
                <HeroSection />
            </main>
        </>
    );
}