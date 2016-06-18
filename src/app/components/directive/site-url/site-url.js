class SiteUrl {

	/**
	 * {Backbone.Collection} scope.collection Ссылка на коллекцию, по которой будет происходить поиск.
	 * {String} scope.modelName Название модели для поиска в ppa.
	 * {String} scope.params Дополнительные параметры, которые будут передаваться в ppa запросе,
	 * например &joinedRelations.
	 * @param $http
	 */
	constructor($http) {
		this.templateUrl = 'app/components/directive/site-url/template.html';
		this.scope = {
			modelName: '@modelName',
			params: '@params'
		};
		this.link = (scope) => {
			scope.search = () => this.search();
			this.scope = scope;
		};
		this.$http = $http;
		this.request = null;
	}

	search() {
		let scope = this.scope;
		let url = this.getSearchUrl(scope.searchValue);
		let collection = scope.collection;
		collection.url = url;
		if(this.request){
			this.request.abort();
		}
		this.request = collection.fetch({reset: true});
		this.request.then(() => {
			scope.loaded = true;
			scope.$apply();
		});
	}

	getSearchUrl(val) {
		return '/api/ppa/s/' + this.scope.modelName + '/search?search=' + val + this.scope.params;
	}

	static directiveFactory($http){
		SiteUrl.instance = new SiteUrl($http);
		return SiteUrl.instance;
	}
}

SiteUrl.directiveFactory.$inject = ['$http'];

export default SiteUrl;