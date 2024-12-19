// import React from "react";
// import styled from "styled-components"
// import { CiShoppingCart } from "react-icons/ci";
// import sidebar from "./sidebar";

// import { IoMdMenu } from "react-icons/io";
// const Nav = styled.div`
// width:91%;
// height:70px;
// background-color:red;
// display:flex;
// justify-content: space-between;
// padding:0 5%;

// `

// class Navbar extends React.Component{
//     const handleside=()=>{
//         this.render(sidebar);
//     }
//     render(){
//         return(
//             <Nav>
//             <div>
//                 <IoMdMenu onClick={handleside}/>
                
//                 <span>Home</span>
//             </div>
//             <div>
//              <CiShoppingCart/>
//             </div>
//             </Nav>
//         )
//     }
// }
// export default Navbar;






import React from "react";
import styled from "styled-components";
import { CiShoppingCart } from "react-icons/ci";
import Sidebar from "./sidebar";
import { IoMdMenu } from "react-icons/io";

const Nav = styled.div`
    width: 91%;
    height: 70px;
    background-color: red;
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
`;

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false,
        };
    }

    handleside = () => {
        this.setState({ showSidebar: !this.state.showSidebar });
    };

    render() {
        return (
            <Nav>
                <div className={"m5"}>
                    <IoMdMenu onClick={this.handleside} />
                    <span>Home</span>
                </div>
                <div>
                    <CiShoppingCart />
                </div>
                {this.state.showSidebar && <Sidebar />}
            </Nav>
        );
    }
}

export default Navbar;

