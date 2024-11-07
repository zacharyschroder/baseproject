import React from "react";
import Link from "./Link";

export default function Navbar() {
    return (
        <nav>
            <Link 
                to="#features" 
                label="Home"
            />
            <Link to="#pricing" label="Pricing" />
            <Link to="#resources" label="Resources" />
        </nav>
    );
}