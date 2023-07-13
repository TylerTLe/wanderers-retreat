import Container from "../Container";
import { TbBeach } from 'react-icons/tb'
import { GiWindmilll } from 'react-icons/gi'


export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    }
    {
        label: 'Windmills',
        icon: GiWindmilll,
        description: 'This property has windmills'
    }
]

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex flex-row it justify-between overflow-x-auto"></div>
        </Container>
    );
}
 
export default Categories;