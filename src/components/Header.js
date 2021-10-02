
const Header = ({toggleAdd}) => {
    return (
        <div className="header">
            <h1 className="title">
                Task Master
            </h1>
            <button className="btn" onClick={toggleAdd}>
                Add
            </button>
        </div>
    )
}


export default Header;