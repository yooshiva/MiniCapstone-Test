import Header from "./WebPage/Header.tsx"
import HeaderToolBar from "./WebPage/HeaderToolBar.tsx";
import PostPreviewGrid from "./WebPage/PostPreviewGrid.tsx";
function WebPageComponent()
{


    return(
        <>
        <PostPreviewGrid></PostPreviewGrid>
        <Header></Header>
        <HeaderToolBar></HeaderToolBar>
        
        </>
    )
}

export default WebPageComponent;