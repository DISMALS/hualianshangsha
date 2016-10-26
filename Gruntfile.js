"use strict";
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            src: ["pc/js/base.js"],
            dest: "pc/js/base.min.js"
        },
        cssmin: {
            one: {
                options: {
                    banner: "/*制作时间：2016.6.13\n作者：王勇\n用途：郑州华联商厦pc网站首页样式\n*/"
                },
                src: ["pc/css/index.css"],
                dest: "pc/css/index.min.css"
            },
            two: {
                options: {
                    banner: "/*制作时间：2016.6.13\n作者：王勇\n用途：郑州华联商厦pc网站其他页面样式\n*/"
                },
                src: ["pc/css/other.css"],
                dest: "pc/css/other.min.css"
            },
            three: {
                options: {
                    banner: "/*制作时间：2016.6.13\n作者：王勇\n用途：郑州华联商厦pc网站其他页面样式\n*/"
                },
                src: ["pc/css/list.css"],
                dest: "pc/css/list.min.css"
            },
            four: {
                options: {
                    banner: "/*制作时间：2016.6.13\n作者：王勇\n用途：郑州华联商厦pc网站首页样式\n*/"
                },
                src: ["mobile/css/index.css"],
                dest: "mobile/css/index.min.css"
            },
            five: {
                options: {
                    banner: "/*制作时间：2016.6.13\n作者：王勇\n用途：郑州华联商厦pc网站其他页面样式\n*/"
                },
                src: ["mobile/css/other.css"],
                dest: "mobile/css/other.min.css"
            },
            six: {
                options: {
                    banner: "/*制作时间：2016.6.13\n作者：王勇\n用途：郑州华联商厦pc网站其他页面样式\n*/"
                },
                src: ["mobile/css/list.css"],
                dest: "mobile/css/list.min.css"
            }
            
        },
        watch: {
            one:{
                files: ["pc/css/index.css"],
                tasks: ["cssmin:one"]
            },
            two:{
                files: ["pc/css/other.css"],
                tasks: ["cssmin:two"]
            },
            three: {
                files: ["pc/css/list.css"],
                tasks: ["cssmin:three"]
            },
            four: {
                files: ["mobile/css/index.css"],
                tasks: ["cssmin:four"]
            },
            five: {
                files: ["mobile/css/other.css"],
                tasks: ["cssmin:five"]
            },
            six: {
                files: ["mobile/css/list.css"],
                tasks: ["cssmin:six"]
            }
        }
    });
    //加载任务插件
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //执行任务
    grunt.registerTask("one", "这是压缩的css文件的任务", ["watch:one"]);
    grunt.registerTask("two", "这是压缩的css文件的任务", ["watch:two"]);
    grunt.registerTask("three", "这是压缩css文件的任务", ["watch:three"]);
    grunt.registerTask("four", "这是压缩的css文件的任务", ["watch:four"]);
    grunt.registerTask("five", "这是压缩的css文件的任务", ["watch:five"]);
    grunt.registerTask("six", "这是压缩css文件的任务", ["watch:six"]);
}