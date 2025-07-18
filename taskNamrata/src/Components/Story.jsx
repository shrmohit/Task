import React from 'react';
import cater from '../assets/cater.jpeg';
import wedding from "../assets/image-27.png"

const Story = () => {
  return (
    <>
      <section className='w-full bg-white px-4 py-16 md:px-20 text-black'>
        <div className='max-w-7xl mx-auto flex flex-row space-x-14'>
          {/* image of catering */}
          <div className='w-[40rem] '>
            <img
              src={cater}
              alt='cater story '
              className='rounded-xl'
            />
          </div>

          {/* right contant */}
          <div className='w-[40rem]'>
            <p className='text-4xl font-semibold text-red-700 uppercase mb-4'>
              Catering Corner.
            </p>
            <h2 className='text-3xl  font-extrabold mb-6'>STORY</h2>

            <p className='text-lg text-gray-700 mb-14 max-w-3xl mx-auto'>
              We are a full-service catering company that specializes in creating
              custom menus that are tailored to your specific needs and budget.
              Our team of professionals will work with you to create a menu that
              is perfect for your event.
            </p>
            <button className='bg-red-600 px-10 py-5 rounded-full text-xl font-bold'>
              Read More..
            </button>
          </div>
        </div>
      </section>
      <section className='w-full bg-white px-4 py-16 md:px-20 text-black'>
        <div className='max-w-7xl mx-auto flex flex-row space-x-14'>


          {/* left contant */}
          <div className='w-[40rem]'>
            <p className='text-4xl font-semibold text-red-700 uppercase mb-4'>
              wedding destination .
            </p>
            <h2 className='text-3xl  font-extrabold mb-6'>STORY</h2>

            <p className='text-lg text-gray-700 mb-14 max-w-3xl mx-auto'>
              Planning a dreamy destination wedding? Let us help with smart tips and services for a smooth, stress-free celebration! 🌍💍<br /><br />

              Dreaming of a perfect destination wedding? ✨ From planning to execution, we’ve got you covered with smart tips and services. Enjoy a seamless, stress-free celebration in your dream location!
            </p>
            <button className='bg-red-600 px-10 py-5 rounded-full text-xl font-bold'>
              Read More..
            </button>
          </div>


          {/* image of catering */}
          <div className='w-[40rem] '>
            <img
              src={wedding}
              alt='cater story '
              className='rounded-xl'
            />
          </div>


        </div>
      </section>
    </>

  );
};

export default Story;
