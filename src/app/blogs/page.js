import LoadBloagData from '@/utils/LoadBloagData';
import Link from 'next/link';
import React from 'react';

// const blogsList = [
//     {
//         id: '1',
//         year: '2022',
//         title: 'Title 1'
//     },
//     {
//         id: '2',
//         year: '2022',
//         title: 'Title 2'
//     },
//     {
//         id: '3',
//         year: '2023',
//         title: 'Title 3'
//     },
//     {
//         id: '4',
//         year: '2024',
//         title: 'Title 4'
//     },
// ]
const Blogspage = async () => {
const blogsList = await LoadBloagData();
    return (
        <div className='container mx-auto my-10'>
            {
                blogsList.map(({ id, year, title }, index) => <div key={index} className='border  border-blue-500 my-2 p-2 hover:bg-blue-50'>
                    <Link className='block'
                        href={{
                            pathname: `/blogs/${id}/`
                        }}
                    >
                        {title}
                    </Link>
                </div>
                )
            }
        </div>
    );
};

export default Blogspage;