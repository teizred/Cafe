import coffeeImage from "../assets/img/coffee.jpeg";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen p-5 gap-22 bg-[#E6E6E6] h-screen">
        <section>
            <div className="flex">
                {/* Left Side */}
                <div className="flex-1">
                    
                </div>
                {/* Right Side */}
                <div className="flex-1">
                    <img className="flex-1 object-cover" src={coffeeImage} alt="" />
                </div>
            </div>
         </section>
        </main>
    )
}