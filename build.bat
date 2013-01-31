echo off
rem ----- use the location of this script to infer $FLORENCE_HOME -------
set FLORENCE_HOME=%~dp0..
if "%WOOKIE_HOME%"=="" set WOOKIE_HOME=%~dp0..\wookie

if "%1"=="" set DEPLOY_DIR=%FLORENCE_HOME%\florence_win8\JS_Client\widget
if "%1"=="win8" set DEPLOY_DIR=%FLORENCE_HOME%\florence_win8\JS_Client\widget

if "%1"=="wookie" set DEPLOY_DIR=%WOOKIE_HOME%\build\webapp\wookie\deploy

ant generate-all-widgets -Dwidget.deploy.dir=%deploy_dir%
