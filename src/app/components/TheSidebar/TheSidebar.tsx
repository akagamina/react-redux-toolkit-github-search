import React, { useState } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { routes } from '../../router';
import '../../assets/scss/sidebar.scss';
interface Item {
    id?: string;
    name?: string;
    path?: string;
    icon?: React.ReactChild;
};

export default function TheSidebar() {
    const [open, setOpen] = useState(false);
    return (
        <Menu isOpen={open}
            onStateChange={(state) => setOpen(state.isOpen)}
            pageWrapId={"page-wrap"}>
            {routes?.map((item: Item, index: number) => (
                <div key={index}>
                    {item.icon}
                    <Link key={index} to={{ pathname: item.path }} onClick={() => setOpen(false)}>{item.name}</Link>
                </div>
            ))}
        </Menu>
    );
}
