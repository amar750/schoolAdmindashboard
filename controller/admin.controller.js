var app=angular.module("myAdmin",["ngRoute","firebase"]);


/*controller for logout the user*/
app.controller("commonController",function($scope) {
     $scope.logOut=function() {
        firebase.auth().signOut().catch(e=>console.log(e.message));
    }

    $scope.dropDown1=function() {
        // body...
        $("#nestedList1").slideDown(function() {
            $(".img11").hide();
            $(".img12").show();

        });
    }

    $scope.dropUp1=function() {
        // body...
        $("#nestedList1").slideUp(function() {
            $(".img11").show();
            $(".img12").hide();

        });
    }

    /***************************/


     $scope.dropDown2=function() {
        // body...
        $("#nestedList2").slideDown(function() {
            $(".img21").hide();
            $(".img22").show();

        });
    }

    $scope.dropUp2=function() {
        // body...
        $("#nestedList2").slideUp(function() {
            $(".img21").show();
            $(".img22").hide();

        });
    }


    /*********************/


     $scope.dropDown3=function() {
        // body...
        $("#nestedList3").slideDown(function() {
            $(".img31").hide();
            $(".img32").show();

        });
    }

    $scope.dropUp3=function() {
        // body...
        $("#nestedList3").slideUp(function() {
            $(".img31").show();
            $(".img32").hide();

        });
    }

});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html",
        activetab:"dashboard",
        controller:"dashboardController"
    }).when("/classnotice", {
        templateUrl : "classnotice.html",
        activetab:"classnotice",
        controller:"classnoticeController"

    }).when("/institutenotice", {
        templateUrl : "institutenotice.html",
        activetab:"institutenotice",
        controller:"institutenoticeController"

    }).when("/homework", {/* start remark template */
        templateUrl : "homework.html",
        activetab:"homework",
        controller:"homeworkController"

    }).when("/classwork", {
        templateUrl : "classwork.html",
        activetab:"classwork",
        controller:"classworkController"

    }).when("/leave", {
        templateUrl : "leave.html",
        activetab:"leave",
        controller:"leaveController"

    }).when("/uniform", {
        templateUrl : "uniform.html",
        activetab:"uniform",
        controller:"uniformController"

    }).when("/generalRemark", {
        templateUrl : "generalRemark.html",
        activetab:"generalRemark",
        controller:"generalRemarkController"
        /*end of remark template */
    }).when("/chat", {
        templateUrl : "chat.html",
        activetab:"chat",
        controller:"chatController"

    }).when("/addUser", {
        templateUrl : "addUser.html",
        activetab:"addUser",
        controller:"addUserController"
        /* time table template start */
    }).when("/classTimeTable", {
        templateUrl : "classTimeTable.html",
        activetab:"classTimeTable",
        controller:"classTimeTableController"

    }).when("/test", {
        templateUrl : "test.html",
        activetab:"test",
        controller:"testController"
        
    }).when("/event", {
        templateUrl : "event.html",
        activetab:"event",
        controller:"eventController"
        
       
    }).when("/transportTiming", {
        templateUrl : "transportTiming.html",
        activetab:"transportTiming",
        controller:"transportTimingController"
        
        /*end time table template template */
    }).when("/homeworkDiary", { /*start diary template*/
        templateUrl : "homeworkDiary.html",
        activetab:"homeworkDiary",
        controller:"homeworkDiaryController"

    }).when("/assignment", {
        templateUrl : "assignment.html",
        activetab:"assignment",
        controller:"assignmentController"
 
    }).when("/prayer", {
        templateUrl : "prayer.html",
        activetab:"prayer",
        controller:"prayerController"

    }).when("/contactDetails", {
        templateUrl : "contactDetails.html",
        activetab:"contactDetails",
        controller:"contactDetailsController"/* diary template end*/

    }).otherwise({
       redirectTo: "/",
        activetab:"dashboard"

    });
});
   app.run(function ($rootScope, $route) {
    $rootScope.$route = $route;
});

app.controller("dashboardController",function($scope) {
  
});

app.controller("classnoticeController",function($scope) {
    // body...
});
app.controller("institutenoticeController",function($scope) {
    // body...
});

app.controller("homeworkController",function($scope) {
    // body...
});
app.controller("classworkController",function($scope) {
    // body...
});

app.controller("leaveController",function($scope) {
    // body...
});
app.controller("uniformController",function($scope) {
    // body...
});
app.controller("generalRemarkController",function($scope) {
    // body...
});
app.controller("chatController",function($scope) {
    // body...
});
app.controller("addUserController",function($scope) {
    // body...
});
app.controller("classTimeTableController",function($scope) {
    // body...
});
app.controller("testController",function($scope) {
    // body...
});
app.controller("diaryController",function($scope) {
    // body...
});







/*Auth function for checking user login or not after loading the page*/
firebase.auth().onAuthStateChanged(user=>{
    if(user)    
        console.log('user is loged In');
    else
        window.location.href="index.html";
});

