import { Link } from 'react-router-dom';
import img1 from '../../assets/biryani_cover.jpg'

const Services = () => {
  return (
    <>
      <span id="courses"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Courses
            </p>
            <h1 className="text-3xl font-bold">Courses</h1>
        
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-4 place-items-center">
           
            {[1,2,3,4,5,5].map((service) => (
              <div
              key={service}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl h h-72 my-6 hover:shadow-2xl  bg-white dark:bg-gray-500  relative shadow-lg duration-high group w-[450px]"
              >
                <div className=' flex  items-center '>

<img className=' ml-3 mt-5 w-60 h-60 rounded-full' src={img1}/>
<div>
<h1 className="text-xl sm:text-xl font-bold ml-6   mb-4">
                  English course
                </h1>

                <Link  to={`/courses/${service}`}>
                <button className=' w-full hover:scale-110 hover:font-bold  bg-primary  ml-4 rounded-full h-10 '>
                  التفاصيل
                </button>
                </Link>
</div>

                </div>

         
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
