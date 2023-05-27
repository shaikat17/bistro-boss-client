import React from 'react';
import TitleSection from './shared/TitleSection';
import MenuItem from './shared/MenuItem';
import useMenu from '../hooks/useMenu';

const OurMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <>
         <TitleSection Title={"From Our Menu"} subTitle="Check it out" />   
         <div className="grid md:grid-cols-2 gap-10 px-3">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center my-2'><button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></div>
        </>
    );
};

export default OurMenu;