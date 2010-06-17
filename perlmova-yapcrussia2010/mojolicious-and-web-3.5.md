@

<span class="actung">Mojolicious</span> и Web 3.5
=====================

*Вячеслав Тихановский*

@

Mojolicious
===========

`perl -MSharifulin -e "say 'Mojolicious' x ∞"`;

@

и
=

 * десятая буква алфавита
 * союз, частица

@

Web 3.5? WTF?!
=============

@

Web 3.5 = CSS<span class="achtung">3</span> + HTML<span class="achtung">5</span>
======================

@

<span class="achtung">WEBSOCKETS</span>
=============

* `+` Canvas
* `+` Уголочки
* `+` Красивые обои

@

WebSockets &ndash; это <span class="achtung">просто</span>!
-----------------------------------------------------------

ВебСокеты &ndash; двусторонние дуплексные каналы передачи данных через один TCP сокет

@

JavaScript <span class="achtung">vs</span> Mojolicious
==========================

    var ws = new WebSocket(url);        websocket '/' => sub {
                                            my $self = shift;

    ws.onmessage = function(e) {            $self->receive_message(sub {
        var message = e.data;                  my ($self, $message) = @_;
    };                                      });


    ws.send('Hello');                       $self->send_message('Hello');
                                        };
@

Мал код, да могуч
=================

@

Showmethedrawing
================

http://github.com/vti/showmethedrawing

@

Искусство или чо?

![ArtOrWhat](mojolicious-and-web-3.5/artorwhat.png)

@

Mojomber
========

http://github.com/vti/mojomber

@

Showmetheshell
==============

http://github.com/vti/showmetheshell

@

Showmethedesktop
================

http://github.com/vti/showmethedesktop

@

WebSockets &ndash; это <span class="achtung">просто</span>!
-----------------------------------------------------------

Спасибо

Вячеслав Тихановский

http://github.com/vti
