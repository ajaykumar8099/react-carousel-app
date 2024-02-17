import "./index.css"
const Header = ()=>{
    return (
        <nav className="nav-bar">
            <div className="nav-bar-one">
                <div className="nav-name-container">
                    <p className="nav-name">TANN TRIM</p>
                </div>
                <div className="nav-items">
                    <p className="nav-products">Home</p>
                    <p className="nav-products">Sevices</p>
                    <p className="nav-products">contact</p>
                </div>
            </div>
            <div className="nav-un-list">
                <button className="nav-products bg">bags</button>
                <button className="nav-products bg">travel</button>
                <button className="nav-products acc">Accesorries</button>
                <button className="nav-products bg">Gifting</button>
                <button className="nav-products bg">Jewelery</button>
            </div>
        </nav>
    )
}
export default Header