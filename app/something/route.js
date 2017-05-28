import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		somethingParam: {
			refreshModel: false,
		}
	},
	model(params) {
		return {};
	},
});
