import SingleBlogData from '@/utils/SingleBlogData';
import React from 'react';

export const generateMetadata = async ({params}) => {
    const {title , body} =await SingleBlogData(params.id)
    return {
        title: title,
        description: body
    }
}

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