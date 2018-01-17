var testApp = angular.module('testApp', []);

testApp.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";
    
    $scope.getRequest = function () {
        //testing the btn
        console.log("All posts' titles are displayed below!");  
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function successCallback(response){
                $scope.response = response;
                for (i=0; i-response.data.length; i++) {
                    console.log("title: " + response.data[i].title);
                }
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };

    $scope.get3Requests = function () {
        //testing the btn
        console.log("Top 3 posts' titles are displayed below!");  
        $http.get("https://jsonplaceholder.typicode.com/posts?id[]=1&id[]=2&id[]=3")
            .then(function successCallback(response){
                $scope.response = response;
                for (i=0; i-response.data.length; i++) {
                    console.log("title: " + response.data[i].title);
                }
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };


});