florence_widgets
================

Widget implementations for use in Florence based applications.

Development
-----------

To deploy widgets into the Client:

ant generate-all-widgets -Dwidget.indclude=INCLUDE_PATTERN

Where INCLUDE_PATTERN is replaced by a pattern that matches the
widgets you want to deply. For example, you could use *Player to
deploy all the player widgets.

Florence widgets are widgets built using the templating system in
Apache Wookie. To build the widgets in the "widgets" directory you
must first checkout Apache Wookie into a directory called wookie
alongside your florence_win8 checkout.

