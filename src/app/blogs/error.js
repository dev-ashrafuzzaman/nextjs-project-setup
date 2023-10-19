"use client"
import React, { useEffect } from 'react';

const BlogError = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error])
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold text-red-600'>{error.message || "Something is wrong happend!"}</h1>
            <button  onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default BlogError;