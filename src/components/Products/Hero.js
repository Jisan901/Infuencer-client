import img from '../../assets/images/gear.png'

function Hero() {
    return (
    <div className="hero rounded" style={{ backgroundImage: `url(${img})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <div className="flex justify-center flex-row gap-4 items-center lg:flex-col">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">What is you want to find?</span>
                  </label>
                  <input type="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
              <button className="btn btn-secondary mt-2 text-white rounded-full">Find</button>
            </div>
          </div>
        </div>
    )
}

export default Hero;