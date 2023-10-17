import React from 'react';

const SingleNewsPage = ({params}) => {
    console.log(params.segments);
    const [year , id] = params.segments || [] ;
    return (
        <div>
            signal news page catch all route year {year} for id {id}
        </div>
    );
};

export default SingleNewsPage;