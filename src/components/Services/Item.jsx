import { Link, useParams } from 'react-router-dom';
import BiryaniImg from "../../assets/biryani5.png";
import {

  FaInstagram,
  FaLinkedin,
  FaWhatsapp,

} from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import { useEffect } from 'react';
export default function Course() {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
  const { id } = useParams();
  return (
    <>
    <div    className="min-h-[550px]">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
        <div
          data-aos="slide-up"
          data-aos-duration="300"
          className="container"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div>
              <img
                src={BiryaniImg}
                alt="biryani img"
                className="max-w-[430px]  w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Lorem, ipsum dolor.{id}
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eaque reiciendis inventore iste ratione ex alias quis magni at
                optio
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae ab sed, exercitationem minima aliquid eligendi
                distinctio? Fugit repudiandae numquam hic quo recusandae.
                Excepturi totam ad nam velit quasi quidem aspernatur.
              </p>
              <div className="flex gap-6">


              <div className=" h-20 w-20 shadow-sm  rounded-full bg-green-100 dark:bg-green-400" >
                    <FaWhatsapp className=' text-5xl mt-4 ml-4' />
              </div>
              <div className=" h-20 w-20 shadow-sm  rounded-full bg-violet-100 dark:bg-violet-400" >
                    <FaInstagram className=' text-5xl mt-4 ml-4' />
              </div>
              <div className=" h-20 w-20 shadow-sm  rounded-full bg-orange-100 dark:bg-orange-400" >
                    <FaLinkedin className=' text-5xl mt-4 ml-4' />
              </div>
             
             <div className='  ml-48 flex gap-2'>
             <LiaStarSolid className=' h-9 mt-5 w-9  text-amber-300'/>
             <LiaStarSolid className=' h-9 mt-5 w-9  text-amber-300'/>
             <LiaStarSolid className=' h-9 mt-5 w-9  text-amber-300'/>
             <LiaStarSolid className=' h-9 mt-5 w-9  text-amber-300'/>
             <LiaStarSolid className=' h-9 mt-5 w-9  text-amber-300'/>

             </div>




                 
             
              </div>


              <div className=' flex justify-between'>


              <Link className=' w-2/5 hover:scale-110 hover:font-bold  bg-primary mt-2 ml-2 rounded-full h-10 ' to={'/info'}>
                <button  className=' w-full mt-2'>
              
                  تسجيل
               
                </button>
                </Link>
                <div className="text-xl gap-3 flex items-center  sm:text-xl font-medium mr-2  ">
       
       <p>$5000</p>
       <p>السعر</p>
           </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}
