var Scope = null

function ControllerSettings($scope, $element, $rootScope){
    Scope = $rootScope

    $scope.fov = 90 // TODO: replace this 90 with output of current fov

    $scope.fovScrollChange = function(){
        lua.Run("fov " + $scope.fov)
    }

    $scope.MenuOption = function( btn, v )
	{
		lua.Run( "RunGameUICommand( %s )", v );
	}
}