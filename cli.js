'use strict';
const yesno = require('yesno');

let program = () => {
	for ( let i=1; i <= 204; i++ ) {
		setTimeout (() => {
			if (i === 204) {
				process.stdout.write('Penus ');
				process.exit();
			} else if (i % 6 === 0) {
				process.stdout.write('Penus\n');
			} else {
				process.stdout.write('Penus ');
			}
		}, i*50 );
	}
};

yesno.ask("Gob's Program: Y/N?", true, function(yes) {
	if(yes) {
		program();
	} else {
		process.exit();
	}
});