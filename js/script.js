var madLibs = angular.module('madLibs',[]);
madLibs.controller('madLibsController',function($scope){
	$scope.data = {
		my_name:'my name',
		job_title:  'job title',
		tedious_task: 'tedious task',
		dirty_task: 'dirty task',
		celebrity: 'celebrity',
		useless_skill: 'useless skill',
		obnoxiuous_celbertity: 'obnoxiuous celbertity',
		huge_number: 'huge number',
		adjective: 'adjective'
	};
	$scope.gender = {
		pronoun: 'she',
		poss: 'her'
	};
	
});