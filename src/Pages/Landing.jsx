import TimeLine from "../components/TimeLine";
function Landing() {
  return (
    <div className="mt-20 lg:mt-40 container mx-auto px-4 lg:px-8">
      <div className="hero  text-black">
        <div className="w-full flex flex-col lg:flex-row-reverse lg:justify-around items-center ">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRqNHA2cnIzNDZ1MWdoams2YXVmNWNya2V0ZzN6ejJjejY2NjlkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
            className="max-w-sm hidden md:flex rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-4"
          />
          <div className="text-center lg:text-start lg:mt-20 space-y-6 ">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Learn Coding!
            </h1>
            <p className="text-sm lg:text-lg max-w-md lg:max-w-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <TimeLine />
      </div>
    </div>
  );
}

export default Landing;
