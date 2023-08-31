import React, { useContext } from 'react';

import { categories } from '../utils/tags';
import { AppContext } from '../context/AppContext';

const Sidebar = () => {

    const { tagsVideos } = useContext(AppContext);

    return (
        <>

            <div className='hidden md:block ml-1 mr-3 mt-3'>
                {categories.map((category, index) => {
                    return (
                        <button onClick={() => tagsVideos(category.name)} key={index} className='flex items-center rounded-xl justify-center bg-white-500 text-black py-3 px-6 font-semibold font-sarif hover:bg-red-600 hover:text-white cursor-pointer'>
                            {category.name}
                        </button>
                    )
                })
                }
            </div>
        </>
    )
}

export default Sidebar
