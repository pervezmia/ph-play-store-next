

const DynamicPage = async ({params}) => {
    const {data} = await params;
    console.log(data);
    return (
        <div>
            <h3>This is Dynamic page.</h3>
        </div>
    );
};

export default DynamicPage;