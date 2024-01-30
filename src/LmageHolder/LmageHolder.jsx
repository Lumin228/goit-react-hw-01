export const LmageHolder = ({name, tag, location, image}) => {
    return (
        <div>
            <img src={image} alt={name} width={50} height={50}/>
            <p>{name}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>
    )
}