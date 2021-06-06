export const ItemOption = (props) => {
    const {size, price} = props;

    return (
        <span> {size} - {price} </span>
    );
}