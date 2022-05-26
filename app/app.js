var appCfg ={
    navRoutes:[        
        {navItem:true, path:"/",name:"Home",view:"app/views/index.html"},
        {navItem:true, path:"/about",name:"About",view:"app/views/about.html"},
        {navItem:true, path:"/menu",name:"Menu",view:"app/views/menu.html"},
        {navItem:true, path:"/gallery",name:"Gallery",view:"app/views/gallery.html"},
        {navItem:true, path:"/contact",name:"Contact",view:"app/views/contact.html"},
        {navItem:true, path:"/login",name:"<span class='fa fa-user'></span>",view:"app/views/login.html",backLink:"/register"},
        {navItem:false, path:"/comingsoon",name:"Comingsoon",view:"app/views/comingsoon.html"},
        {navItem:false, path:"/register",name:"Register",view:"app/views/register.html",backLink:"/login"},
        {navItem:false, path:"/privacy",name:"Privacy",view:"app/views/privacy.html"}  
    ],
    errRoute: {view:"app/views/privacy.html"}
};

angular.module("app",["ngRoute","ngSanitize"]);
angular.module("app")
.config(function($routeProvider) {
    for(var i=0;i<appCfg.navRoutes.length;i++){
        $routeProvider.when(appCfg.navRoutes[i].path,{templateUrl:appCfg.navRoutes[i].view});        
    }
    $routeProvider.otherwise({templateUrl:appCfg.errRoute.view});
});
angular.module("app").run(function($rootScope){
    $rootScope.navMenu = appCfg.navRoutes;
});