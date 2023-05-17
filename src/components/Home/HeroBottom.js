import img from '../../assets/images/gear.png'

function Hero() {
    return (
        <div className="hero py-6 px-3 md:px-10 mx-auto">
          <div className={`hero-content flex-col lg:flex-row`}>
            <div className="max-w-sm">
                <img className="w-full" src={img} alt='main'/>
            </div>
            <div className="max-w-[550px]">
              <h1 className="text-4xl font-bold">Featured products at one place</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <a href="/" class="btn btn-sm btn btn-secondary bg-pink-500 rounded-md text-white md:btn-md gap-2 normal-case lg:gap-3">
              <div class="flex flex-col items-end">
              <span>Explore</span>
              </div> 
              <svg class="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Hero;