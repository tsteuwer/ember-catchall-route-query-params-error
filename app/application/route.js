import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		applicationParam: {
			refreshModel: true,
		},
	},

	model(params) {
		return Ember.Object.create();
	},
});
