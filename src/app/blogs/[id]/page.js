import React from 'react';

const SingleBlogpage = ({params}) => {
    console.log(params);
    return (
        <div>
            Single Blog {params.id}
        </div>
    );
};

export default SingleBlogpage;