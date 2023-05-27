

const TitleSection = ({subTitle, Title}) => {
    return (
        <div className="flex flex-col items-center gap-3 mb-4">
            <p className="font-light text-yellow-500">---{subTitle}---</p>
            <h3 className="text-3xl border-y-2 py-2">{Title}</h3>
        </div>
    );
};

export default TitleSection;