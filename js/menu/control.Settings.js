var Scope = null

function ControllerSettings($scope, $element, $rootScope){
    Scope = $rootScope

    $scope.language = [
        "Russian", "English", "French","Deutch","Italian",
        "Spanish","Bolgar","Czech","Dutch","Netherlands",
        "Finish","Greek","Hungarian","Japan","Korean",
        "Norwegian","Poland","Portuguese","Portuguese (Brazil)", 
        "Chineese (Simplified)", "Swedish","Tai","Chineese (Traditional)", "Turkish"]
    $scope.selectedLang = "English"
    
    $scope.fov = 90 // TODO: replace this 90 with output of current fov

    $scope.fovScrollChange = function(){
        lua.Run("fov " + $scope.fov)
    }

    $scope.MenuOption = function( btn, v )
	{
		lua.Run( "RunGameUICommand( %s )", v );
	}

    // Language settings
    $scope.selectLang = function(lang){
        $scope.selectedLang = lang
    }
    $scope.isLangSelected = function(lang){
        return lang == $scope.selectedLang ? "active" : ""
    }
}