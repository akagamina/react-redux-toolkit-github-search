import React from 'react';
import { Repositories } from '../../features/repositories/Repositories';
import GitHubIcon from '@material-ui/icons/GitHub';

interface Route {
    name: string,
    to: React.ReactChild,
    path: string,
    icon: React.ReactChild;
}

export const routes: Route[] = [
    {
        name: 'Repositories',
        to: <Repositories />,
        path: '/repos',
        icon: <GitHubIcon />
    },
];