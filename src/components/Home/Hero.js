import img from '../../assets/images/main-camera.png'
import svg from '../../assets/images/Circle design.svg'

function Hero() {
    return (
        <div className="hero py-6 px-3 md:px-10 mx-auto">
          <div className={`hero-content flex-col lg:flex-row-reverse`}>
            <div className="max-w-sm relative">
                <img className="" src={svg} alt="back" />
                <img className="absolute top-0 z-10 w-full" src={img} alt='main'/>
            </div>
            <div className="max-w-[550px]">
              <h1 className="text-5xl font-bold">Start your journey as <br />influencer</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <a href="/" className="btn btn-sm btn btn-secondary bg-pink-500 rounded-full text-white md:btn-md gap-2 normal-case lg:gap-3">
              <div className="flex flex-col items-end">
              <span>Get started</span>
              </div> 
              <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Hero;