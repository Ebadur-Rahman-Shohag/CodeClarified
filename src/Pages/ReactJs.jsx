import ReactTopic from "../components/ReactTopic";
import { reactData } from "../data/data";

function ReactJs() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap justify-center align-start container mx-auto mt-14 px-4 lg:px-0">
          {reactData.map((el) => (
            <ReactTopic key={el.id} title={el.title} data={el.data} />
          ))}
        </div>
      </div>
    </>
  );
}

console.log("April");
export default ReactJs;
