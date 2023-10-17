import SingleBlogData from '@/utils/SingleBlogData';
import React from 'react';

const SingleBlogpage = async ({params}) => {
    const {title , id} =await SingleBlogData(params.id)
    return (
        <div>
            Single Blog {params.id}
            {id}:{title} 
        </div>
    );
};

export default SingleBlogpage;