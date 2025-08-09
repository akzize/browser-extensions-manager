export const Extension = ({logo, name, description, toggleId}) => {
    <div className="extension">
        <div className="top">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="txt">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
        <div className="actions">
            <button>Remove</button>
            <label htmlFor={toggleId} className='switch'>
                <input type="checkbox" id={toggleId} />
                <span className='slider'></span>
            </label>
        </div>
    </div>
}