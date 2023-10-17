import Link from 'next/link';
import React from 'react';
const newsList = [
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
const NewsPage = () => {
    return (
        <div>
            {
                newsList.map(({ id, year, title }, index) => <Link className='border-2 w-[120px] p-10 ms-4 '
                    // aita just route ta re object hesabe set korce sathe query system a pathano jabe 
                href={{
                        pathname: `/news/${year}/${id}` ,
                        query: {
                            title: title
                        }
                    }}
                    key={index}>
                    {title}
                </Link>)
            }
        </div>
    );
};

export default NewsPage;