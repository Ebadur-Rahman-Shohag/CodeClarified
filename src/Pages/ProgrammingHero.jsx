
import ProgrammingHeroTopic from "../components/ProgrammingHeroTopic";
import { heroData } from "../data/data";


function ProgrammingHero() {
    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center align-start container mx-auto mt-14 px-4 lg:px-0">
                {heroData.map((el) => (
                    <ProgrammingHeroTopic key={el.id} title={el.title} data={el.data} />
                ))}
            </div>
        </div>
    );
}

export default ProgrammingHero;