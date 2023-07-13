import Container from "../Container";



export const categories = [
    {
        label: 'Beach'
        icon: TbBeach,
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