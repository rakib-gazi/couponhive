

const PageHeader = ({registration}) => {
    return (
        <div className="bg-green-logo rounded-3xl py-16">
            <h1 className="text-center text-white font-bold text-2xl ">{registration}</h1>
        </div>
    );
};

export default PageHeader;