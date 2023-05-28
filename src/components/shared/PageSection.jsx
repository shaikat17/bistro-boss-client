import MenuItem from "./MenuItem";


const PageSection = ({items}) => {
    return (
        <div>
        <div className="grid md:grid-cols-2 gap-10 px-3 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center my-2'><button className="btn btn-outline border-0 border-b-4 my-4">Order Your Favourite Food</button></div>
      </div>
    );
};

export default PageSection;