import "./web-page.css";

function HeaderToolBar()
{

    return(
    <form>

        <div className = "header-toolbar">

            <div className = "burger-menu-container">
            <button className = "burger-menu-button"> 
                <div className = "burger-menu-logo"></div>
            </button>
        </div>


            <div className = "searchbarbutton-container">
                <input className = "search-bar" placeholder = "Search"></input>
                <button className = "search-button">
                    <div className = "search-logo"></div>
                </button>
            </div>


            <div className = "user-profile-container">
                <div className = "user-profile"></div>
                <text className = "user-name-text">UserName</text>
             </div>

        </div>
    </form>
        
        
       
    );
}

export default HeaderToolBar;