import { LmageHolder } from "../LmageHolder/LmageHolder"
import { Statsfor } from "../Stats/Stats"
import css from './Porfile.module.css'
export const Profile = ({name, tag, location, image, stats}) => {

    return  (
        <div className={css.main}>
            <LmageHolder name={name} tag={tag} location={location} image={image}/>
            <Statsfor stats={stats} />
        </div>
    )

}