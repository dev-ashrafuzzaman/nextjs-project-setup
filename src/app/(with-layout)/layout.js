import Navber from '@/component/Navber';
import React from 'react';

const Withlayout = ({children}) => {
    return (
        <div>
         <Navber></Navber>
            {children}
            <footer>
                Copyright Ashrafuzzaman
            </footer>
        </div>
    );
};

export default Withlayout;