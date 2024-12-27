import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
    return (
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                VirtualIr Tools for developer
                <span className='bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text'> {"  "}By Ishan</span>

            </h1>
            <p className='mt-10 text-lg text-center max-w-4xl text-neutral-500'>
                  Every great achievement begins with the courage to take the first step, the discipline to keep going, and the belief that your efforts will shape your future."
            </p>
            <div className= ' flex justify-center  my-10 '>
                <a className=' bg-red-500 py-2 px-3 mx-3 border-double rounded-md ' href="#">start for free</a>
                <a className=' border py-2 px-3 mx-3  rounded-md ' href="#">docmentation</a>
                
              
            </div>
            <div className=' flex mt-10 justify-center'>
                <video autoPlay muted loop className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
               source  src ={video1} type = "video/mp4">
                your browser does not support video

                </video>
                <video autoPlay muted loop className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
               source  src ={video2} type = "video/mp4">
                your browser does not support video

                </video>




            </div>
           

        </div>

    );
}

export default Hero