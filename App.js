import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator } from 'react-navigation-drawer';

import home from './src/pages/home';
import favoritos from './src/pages/favoritos';
import notificacoes from './src/pages/notificacoes';

import CustomDrawer from './src/components/CustomDrawer';

const Routes = createAppContainer(
	
	createDrawerNavigator({
		home,
		favoritos,
		notificacoes
	}, {
		initialRouteName: 'home',
	})
)

export default Routes;