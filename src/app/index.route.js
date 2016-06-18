export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('root', {
			abstract: true
		})
		.state('root.project', {
			url: '/',
			views: {
				'header@': {
					templateUrl: 'app/project/header.html'
				},
				'center@': {
					templateUrl: 'app/project/project.html',
					controller: 'ProjectController'
				}
			}
		});

	$urlRouterProvider.otherwise('/');
}
