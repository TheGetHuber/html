
var IN_ENGINE = navigator.userAgent.indexOf( "Valve Source Client" ) != -1;
var IS_SPAWN_MENU = false

var App = angular.module( 'MenuApp', [ 'tranny', 'ui' ] );

App.config(function ( $routeProvider, $locationProvider )
{
	$routeProvider.when('/', { templateUrl: 'template/main.html' } );
	$routeProvider.when('/addons/', { templateUrl: 'template/addon_list.html' } );
	$routeProvider.when('/newgame/', { templateUrl: 'template/newgame.html' } );
	$routeProvider.when('/servers/', { templateUrl: 'template/servers.html' } );
	$routeProvider.when('/demos/', { templateUrl: 'template/demos.html' } );
	$routeProvider.when('/saves/', { templateUrl: 'template/saves.html' } );
	$routeProvider.when('/dupes/', { templateUrl: 'template/dupes.html' } );
	$routeProvider.when('/settings/', { templateUrl: 'template/settings.html' } );
	$routeProvider.when('/gamesettings/', { templateUrl: 'template/minecraft/gamesettings.html' } );
	
	$routeProvider.when('/settings/graphics', { templateUrl: 'template/minecraft/settings/graphics.html' } );
	$routeProvider.when('/settings/access', { templateUrl: 'template/minecraft/settings/access.html' } );
	$routeProvider.when('/settings/controls', { templateUrl: 'template/minecraft/settings/controls.html' } );
	$routeProvider.when('/settings/language', { templateUrl: 'template/minecraft/settings/language.html' } );
	$routeProvider.when('/settings/music', { templateUrl: 'template/minecraft/settings/music.html' } );
	$routeProvider.when('/settings/chat', { templateUrl: 'template/minecraft/settings/chat.html' } );
	$routeProvider.when('/settings/online', { templateUrl: 'template/minecraft/settings/online.html' } );
	$routeProvider.when('/settings/resourcepacks', { templateUrl: 'template/minecraft/settings/resourcepacks.html' } );
	$routeProvider.when('/settings/menusettings', { templateUrl: 'template/minecraft/settings/menusettings.html' } );
} );

function UpdateDigest( scope, timeout )
{
	if ( !scope ) return;
	if ( scope.DigestUpdate ) return;

	scope.DigestUpdate = setTimeout( function ()
	{
		scope.DigestUpdate = 0;
		scope.$digest();

	}, timeout );
}

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
App.filter( 'startFrom', function ()
{
	return function ( input, start )
	{
		if ( !input ) return input;

		start = +start; //parse to int
		return input.slice( start );
	}
} );
