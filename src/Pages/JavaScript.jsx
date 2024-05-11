import JavaScriptTopic from "../components/JavaScriptTopic";
import { javascriptData } from "../data/data";


function JavaScript() {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center align-start container mx-auto mt-14 px-4 lg:px-0">
        {javascriptData.map((el) => (
          <JavaScriptTopic  key={el.id} title={el.title} data={el.data} />
        ))}
      </div>
    </div>
  );
}

export default JavaScript;

