import TechnoItem from "../components/TechnoItem";

const TechnosList = (props) => {

    const { technos, handleDeleteTechno } = props;


    return (
        <div className='technos-list'>
            <h1>All Technos</h1>
            {technos.map((techno) => {
                return <TechnoItem
                    techno={techno}
                    handleDeleteTechno={handleDeleteTechno} />
            })}
        </div>
    );
}

export default TechnosList;
