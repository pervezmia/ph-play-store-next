import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-center gap-6 bg-mist-600 p-3'>
                <Link href={"/"}><p>Home</p></Link>
                <Link href={"/signup"}><p>Sign Up</p></Link>

            </div>
        </div>
    );
};

export default Navbar;