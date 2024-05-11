import TimeLine from "../components/TimeLine";
function Landing() {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="hero min-h-screen text-black">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRqNHA2cnIzNDZ1MWdoams2YXVmNWNya2V0ZzN6ejJjejY2NjlkZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
            className="max-w-sm rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-4"
          />
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Box Office News!
            </h1>
            <p className="text-sm lg:text-lg">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <TimeLine />
    </div>
  );
}

export default Landing;
