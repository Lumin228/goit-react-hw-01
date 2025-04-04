import css from './LmageHolder.module.css'
export const LmageHolder = ({name, tag, location, image}) => {
    return (
        <div className={css.main}>
            <img className={css.img} src={image} alt={name} width={70} height={70}/>
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    )
}