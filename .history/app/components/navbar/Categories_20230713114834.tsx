import Container from "../Container";
import { TbBeach } from 'react-icons/tb'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'


export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
]

const Categories = () => {
    return (
        <Container>
            <div className="pt-4 flex flex-row it justify-between overflow-x-auto">
                {categories.map(item) => (
                    <CatetoryBox 
                    key={item.}
                    />
                )}
            </div>
        </Container>
    );
}
 
export default Categories;