import React from 'react'
import MenuContainer from './MenuContainer'
import {
    AccountBalanceWalletRounded,
    Chat,
    Favorite,
    HomeRounded,
    Settings,
    SummarizeRounded,
  } from "@mui/icons-material";
function Menus() {
    return (
        <div>
            <div className="leftMenu">
                <ul id="menu">
                    {/* prettier-ignore */}
                    <MenuContainer link={'#'} icon={<HomeRounded />} />
                    {/* prettier-ignore */}
                    <MenuContainer link={'#'} icon={<Chat />} />
                    {/* prettier-ignore */}
                    <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
                    {/* prettier-ignore */}
                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    )
}

export default Menus