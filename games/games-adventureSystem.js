$.lang.register('adventuresystem.adventure.cooldown', 'La flota sigue de patrulla! $1 para volver a intentarlo.');
$.lang.register('adventuresystem.adventure.usage', 'Uso: !asalto [$1].');
$.lang.register('adventuresystem.alreadyjoined', 'Ya te has unido al asalto!');
$.lang.register('adventuresystem.completed', 'El asalto ha finalizado! Los supervivientes son: $1.');
$.lang.register('adventuresystem.completed.no.win', 'El asalto ha finalizado! Todos han muerto en el intento.');
$.lang.register('adventuresystem.completed.win.total', 'El asalto ha terminado con $1 superviviente(s) y $2 muerto(s).');
$.lang.register('adventuresystem.join.bettoohigh', 'No puedes unirte con $1, el máximo es $2.');
$.lang.register('adventuresystem.join.bettoolow', 'No puedes unirte con $1, el mínimo es $2.');
$.lang.register('adventuresystem.join.needpoints', 'No puedes unirte con $1, solo tienes $2.');
$.lang.register('adventuresystem.join.notpossible', 'No puedes unirte ahora.');
$.lang.register('adventuresystem.join.success', 'Te has unido al asalto con $1!');
$.lang.register('adventuresystem.loaded', 'Cargados los asaltos disponibles (encontrados $1).');
$.lang.register('adventuresystem.payoutwhisper', 'Asalto completado, $1 + $2 ha sido añadido a tu cuenta.');
$.lang.register('adventuresystem.runstory', 'Empezando el asalto a "$1" con $2 jugador(es).');
$.lang.register('adventuresystem.set.success', 'Establecido $1 a $2.');
$.lang.register('adventuresystem.set.usage', 'Uso: !asalto set [settingname] [value].');
$.lang.register('adventuresystem.start.success', '$1 está intentando reunir un equipo para realizar un asalto! Usa "!asalto [$2]" para unirte!');
$.lang.register('adventuresystem.tamagotchijoined', '$1 se está uniendo al asalto.');
$.lang.register('adventuresystem.top5', 'Top 5 de asaltantes: $1.');
$.lang.register('adventuresystem.top5.empty', 'No existen registros de los ganadores de asaltos.');

$.lang.register('adventuresystem.stories.1.title', 'Cuartel General de WerzaX');
$.lang.register('adventuresystem.stories.1.chapter.1', 'Your memory is vague, on the table a small laptop is playing a video: "My name is The Architect. The bank of Karabraxos is the most secure bank in the universe. You will rob the bank of Karabraxos!"');
$.lang.register('adventuresystem.stories.1.chapter.2', 'Unable to leave their minds blank, (caught) slowly feel their mind being drained as The Teller feeds on their thoughts.');
$.lang.register('adventuresystem.stories.1.chapter.3', 'We find ourselves back in the room we started in as consciousness of (survivors) slowly fades again, only to wake up in our beds like nothing at all has happened.');

$.lang.register('adventuresystem.stories.2.title', 'Base Estelar Far WerZ');
$.lang.register('adventuresystem.stories.2.chapter.1', 'Friends! I\'ve got coordinates for a secret stash of bolts, hidden away within the bowels of the elven forest. We should shoe up and give this a go!');
$.lang.register('adventuresystem.stories.2.chapter.2', 'Look out, bear traps! (caught) got their legs ripped off!');
$.lang.register('adventuresystem.stories.2.chapter.3', 'Dayum, that was a close call for loosing a leg. But you\'ve deserved this (survivors)!');

$.lang.register('adventuresystem.stories.3.title', 'Nave Home One');
$.lang.register('adventuresystem.stories.3.chapter.1', 'Ah, my dear friends! I may have found the adventure of a lifetime. Namely the house of count Dracula is believed to be the bolts master! I\'m for going now!');
$.lang.register('adventuresystem.stories.3.chapter.2', 'It\'s him! (caught) got slaughtered violently!');
$.lang.register('adventuresystem.stories.3.chapter.3', 'That was a close call, I don\'t think I\'ve been bitten. you? Ow well, (survivors), here\'s your share! ~Transforms into a bat and flutters off~');

$.lang.register('adventuresystem.stories.4.title', 'Academia WerZ Army');
$.lang.register('adventuresystem.stories.4.chapter.1', 'I think we have a much bigger thread on our hands than the cave in... It is half man, half bear, half pig... Don\'t Laugh, I\'M SUPER CEREAL!');
$.lang.register('adventuresystem.stories.4.chapter.2', '/me As the adventurers work their way through the tunnels they hear a soft noise from behind them...');
$.lang.register('adventuresystem.stories.4.chapter.3', 'Look out! It\'s ManBearPig! (caught) get dragged of into the darkness.');
$.lang.register('adventuresystem.stories.4.chapter.4', '(survivors) run away. Let\'s get out of here guys! We can\'t deal with this alone');


/*
 * Rules on writing your own adventure story:
 *
 * - Stories are automatically loaded from this file by their sequence number (adventuresystem.stories.[This number]).
 * - Keep the format of your story as shown above.
 * - There can be an unlimited number of stories, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - A story must have a title.
 * - A story can have an unlimited number of chapters, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - Stories are picked at random.
 *
 ** Game specific story how-to.
 * - Add $.lang.register('adventuresystem.stories.NUMBER.game', 'GAME NAME IN LOWER CASE'); on top of the story chapter.
 * Example >
 * $.lang.register('adventuresystem.stories.5.game', 'gaming talk shows');
 * $.lang.register('adventuresystem.stories.5.title', 'Talk Shows');
 * $.lang.register('adventuresystem.stories.5.chapter.1', 'random story...');
 *
 * Underneath is a template for your first custom story, just remove the preceding slashes.
 */

//$.lang.register('adventuresystem.stories.5.title', '');
//$.lang.register('adventuresystem.stories.5.chapter.1', '');
//$.lang.register('adventuresystem.stories.5.chapter.2', '');
//$.lang.register('adventuresystem.stories.5.chapter.3', '');
