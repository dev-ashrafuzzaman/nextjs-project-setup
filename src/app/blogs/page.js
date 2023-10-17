import Link from 'next/link';
import React from 'react';

const blogsList = [
    {
        id: '1',
        year: '2022',
        title: 'Title 1'
    },
    {
        id: '2',
        year: '2022',
        title: 'Title 2'
    },
    {
        id: '3',
        year: '2023',
        title: 'Title 3'
    },
    {
        id: '4',
        year: '2024',
        title: 'Title 4'
    },
]
const Blogspage = () => {
    return (
        <div>
            {
                blogsList.map(({ id, year, title }, index) => <Link className='border-2 w-[120px] p-10 ms-4 '
                    href={{
                        pathname: `/blogs/${year}/${id}`
                    }} 
                    key={index}>
                    {title}
                </Link>)
            }
        </div>
    );
};

export default Blogspage;