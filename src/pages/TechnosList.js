import TechnoItem from "../components/TechnoItem";

const TechnosList = (props) => {

    // const {technos}=props
    const technos = props.technos
    

    return (
        <div className='technos-list'>
            <h1>All Technos</h1>
            {technos.map((techno) => {
                return <TechnoItem techno={techno}/>
            })}
        </div>
    );
}

export default TechnosList;
