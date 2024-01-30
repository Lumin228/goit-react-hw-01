import { LmageHolder } from "../LmageHolder/LmageHolder"
import { Statsfor } from "../Stats/Stats"
export const Profile = ({name, tag, location, image, stats}) => {
    
    return  (
        <div>
            <LmageHolder name={name} tag={tag} location={location} image={image}/>
            <Statsfor stats={stats} />
        </div>
    )

}