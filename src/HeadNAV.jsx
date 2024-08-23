import React from 'react'

import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function HeadNAV(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand href="/">TYE</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        
                        <NavItem>
                            <NavLink href="https://dev.to/javinpaul/8-projects-beginners-can-build-to-learn-reactjs-in-2022-1e3i">
                                DEV Community
                            </NavLink>
                        </NavItem>
                       
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </div>
    )
}

export default HeadNAV