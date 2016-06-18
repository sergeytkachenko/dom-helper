/* global malarkey:false, moment:false */

import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {ProjectController} from './project/project.controller';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import SiteUrl from './components/directive/site-url/site-url';

angular.module('domHelper', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'ngMaterial'])
	.constant('malarkey', malarkey)
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.controller('ProjectController', ProjectController)
	.directive('siteUrl', SiteUrl.directiveFactory)
	.directive('acmeNavbar', NavbarDirective);
