import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import style from './css/navbar.module.css'
import { useLocation } from 'react-router'

const UnderLine = styled.div`
position: absolute;
left: 20%;
width: 34px;
height: 0px;
border: 3px solid #FFFFFF;
`

function Navbar() {
    const curr = useLocation().pathname
    
    return (
        <div className={style.Navbar}>
            <ul>
                <div className={style.flex}>
                    <div className={style.frame}>
                        <div >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12.255C16.1405 13.4112 13.0844 14.0038 10 14C6.817 14 3.78 13.38 1 12.255H19ZM14 5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V5H14ZM10 11H10.01H10ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                    <li className={style.logofont}>
                    <NavLink style={{textDecoration:"none",color:"white"}} to="/">
                     JobHunt
                    </NavLink>
                    </li>
                    
                </div>
                <ul>
                    <li>
                    <NavLink style={{textDecoration:"none",color:"white"}} to="/Jobs">
                     Find Jobs
                    </NavLink>
                    {curr === "/Jobs" && <UnderLine/>}
                    </li>
                    <li>
                    Upskill Yourself
                    </li>
                </ul>
            </ul>
            <ul>
                <li>
               <NavLink style={{textDecoration:"none",color:"white"}} to="/postJob">
                Post a Job
                </NavLink>
                {curr === "/postJob" && <UnderLine/>}
                </li>
                <li>
                Sign in
                </li>
            </ul>
        </div>
    )
}

export default Navbar
