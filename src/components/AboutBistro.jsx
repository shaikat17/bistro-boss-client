import chefService from "../assets/home/chef-service.jpg"

const AboutBistro = () => {
    return (
        <div className='p-20 bg-contain bg-no-repeat mx-3' style={{backgroundImage: `url(${chefService})`}}>
            <div className="bg-white p-10 text-center">
                <h1 className="uppercase text-3xl mb-3">Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, incidunt laboriosam laudantium sapiente aliquam maxime aut expedita amet? Quisquam, illum dolorum vero enim iusto suscipit numquam non assumenda animi! Consequatur at optio ratione nulla.</p>
            </div>
        </div>
    );
};

export default AboutBistro;