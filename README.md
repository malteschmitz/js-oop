Object Oriented Programming with JavaScript
===========================================

This repository contains a german talk and code sniplets about object
oriented programming in JavaScript:
* use prototypical inheritance (also called delegation or
  differential inheritance) directly
* simulate classical inheritance (using classes and instances of these)


Objektorientierte Programmierung mit JavaScript
===============================================

Dieses Repository enth�lt einen Vortrag und Code-Beispiele zu
objektorierter Programmierung mit JavaScript.

Zusammenfassung
---------------

Neben Java geh�rt JavaScript zu den am weitesten verbreiteten
Programmiersprachen und fast jeder Programmierer hat  schon mal einige
Zeilen eigenen JavaScript-Code in eine Website eingebunden. Zu den
St�rken von JavaScript geh�rt neben der extrem weiten Verbreitung in
aktuellen Browsern auch die niedrige Einstiegsh�rde. Auf der anderen
Seite wird JavaScript aber gerne bel�chelt und nicht als vollwertige
Programmiersprache wahrgenommen. Wer versucht, tiefer in diese Sprache
einzusteigen, st��t schnell auf Fragen wie: Warum hat JavaScript keine
Klassen? Warum braucht es f�r objektorientierte Programmierung erst
Frameworks wie Mootools oder Prototype? Wie funktionieren die Objekte
in JavaScript und wo ist hier eigentlich Vererbung? Wieso ist das
Klassenmodell eigentlich in jedem JavaScript-Framework anders?

JavaScript kennt im Gegensatz zu vielen anderen objektorientierten
Programmiersprachen wie C++ oder Java keine Klassen, sondern basiert
auf prototypischer bzw. differenzieller Vererbung. Jedes Objekt hat
einen Prototyp und alle Eigenschaften, die das Objekt nicht selbst
hat, werden vom Prototyp �bernommen. Dieses Konzept wird auch als
differenzielle Vererbung bezeichnet, da f�r jedes Objekt nur die
Differenz zu seinem Prototyp angegeben wird. Statt Klassen und
Konstruktoren werden in JavaScript Funktionen eingesetzt, um Objekte
mit versteckten Links zu ihren Prototypen zu erzeugen. Der erste Teil
dieses Vortrags gibt eine umfangreiche Einf�hrung in Objekte und
Funktionen in JavaScript und wie diese Form der Objektorientierung
funktioniert. Im Gegensatz zur klassischen objektorientierten
Programmiersprachen ist man in JavaScript nicht auf ein Klassen- bzw.
Programmiermodell festgelegt. Im zweiten Teil dieses Vortrags wird
aufgezeigt, auf welche Arten Klassen und andere Formen der
Objektorientierung in JavaScript umgesetzt werden k�nnen. Um nicht
jedes JavaScript-Projekt zun�chst mit der Implementierung eines
Klassenmodells beginnen zu m�ssen, k�nnen Frameworks verwendet werden.
In den letzten Jahren ist eine Vielzahl an JavaScript-Frameworks
entstanden, die bei objektorientierter Programmierung unterst�tzen.
Der dritte Teil dieses Vortrags stellt einige vor und erl�utert, wie
diese die im zweiten Teil vorgestellten Konzepte in der Praxis
umsetzen.

Dieser Vortrag richtet sich an Programmierer, die bereits Erfahrung in
objektorientierter Programmierung haben. Es werden aber keine
Vorkenntnisse im Bereich JavaScript vorausgesetzt.

Gliederung
----------

1. Einf�hrung in JavaScript
   - Funktionen
   - Objekte
   - die vier verschiedenen Arten des Funktionsaufrufs und die Werte von this
     - als Funktion
     - als Methode
     - als Konstruktor
     - mit apply bzw. call
   - prototypische bzw. differenzielle Vererbung
     - wie Attribute aus dem Prototyp durchscheinen
     - jedes Objekt hat einen versteckten Link auf seinen Prototypen
     - die prototype-Eigenschaft von Funktionen und die
       constructor-Eigenschaft von Objekten
     - der new-Operator
2. Objektorientierung mit JavaScript
   - direkt-prototypische Vererbung (Verweis)
   - direkt-kopierende Vererbung (Kopie)
   - pseudoklassische Vererbung (Verweis)
   - prototypische Vererbung (Verweis)
  �- funktionale Vererbung (Kopie)
     - private Attribute
     - gesch�tzte Attribute
     - �ffentliche Attribute
   - Vererbung durch Kopieren
3. Objektorientierung mit JavaScript-Frameworks
   - Underscore.js und _.extend
     http://underscorejs.org/#extend
   - jQuery und $.extend
     http://api.jquery.com/jQuery.extend/
   - YUI und Y.extend
     http://www.yuiblog.com/blog/2010/01/06/inheritance-patterns-in-yui-3/
   - Backbone.js und Backbone.Model.extend
     http://backbonejs.org/#Model-extend
   - MooTools und new Class
     http://mootools.net/docs/core/Class/Class
   - Prototype und Class.create
     http://prototypejs.org/learn/class-inheritance
     
Beispiele
---------

Das Verzeichnis talk enth�lt den LaTeX-Quellcode des Vortrags. Das Verzeichnis
basics enth�lt die grundlegenden JavaScript-Beispiele. Das Verzeichnis
frameworks enth�lt die Beispiele zum dritten Abschnitt und libs enth�lt die
verwendeten Bibliotheken. Im Downloadbereich des Repositorys befinden
sich die gerenderten PDF-Dateien des Vortrags.
