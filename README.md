florence_widgets
================

Widget implementations for use in Florence based applications.

Pre-Requeisites
---------------

Florence widgets are widgets built using the templating system in
Apache Wookie. To build these widgets you must first checkout Apache
Wookie into a directory called "wookie" alongside your
florence_widgets checkout.

Deploy Widgets
--------------

To deploy widgets into the C# Client run the build.bat script.

If you want to deploy to another client you can add the path to the
widget deploy folder as a parameter to the build script, e.g.

build c:\Users\rgardler\projects\wookie\build\webapp\wookie\deploy

For your convenience the build script contains some shortcuts for
florence related clients:

build - deploys to the JavaSccript Windows 8 client
build win8 - deploys to the JavaSccript Windows 8 client
build win8_c# - deploys to the C# windows 8 client
build wookie - deploys to a live developer instance of wookie

