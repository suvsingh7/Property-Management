import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import logo from "../../../assets/logo.svg"; // Adjust the path as necessary
import yariga from "../../../assets/yariga.svg"; // Adjust the path as necessary

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="Yariga" width="28px" />
                ) : (
                    <img src={yariga} alt="Refine" width="140px" />
                )}
            </Link>
        </Button>
    );
};