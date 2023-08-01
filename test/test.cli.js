/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var IS_WINDOWS = require( '@stdlib/assert-is-windows' );
var EXEC_PATH = require( '@stdlib/process-exec-path' );
var RE_EOL = require( '@stdlib/regexp-eol' ).REGEXP;
var readFileSync = require( '@stdlib/fs-read-file' ).sync;
var minard = require( './../lib' );


// VARIABLES //

var fpath = resolve( __dirname, '..', 'bin', 'cli' );
var opts = {
	'skip': IS_BROWSER || IS_WINDOWS
};


// FIXTURES //

var PKG_VERSION = require( './../package.json' ).version;


// TESTS //

tape( 'command-line interface', function test( t ) {
	t.ok( true, __filename );
	t.end();
});

tape( 'when invoked with a `--help` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'docs', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		EXEC_PATH,
		fpath,
		'--help'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), expected+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `-h` flag, the command-line interface prints the help text to `stderr`', opts, function test( t ) {
	var expected;
	var cmd;

	expected = readFileSync( resolve( __dirname, '..', 'docs', 'usage.txt' ), {
		'encoding': 'utf8'
	});
	cmd = [
		EXEC_PATH,
		fpath,
		'-h'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), expected+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `--version` flag, the command-line interface prints the version to `stderr`', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'--version'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), PKG_VERSION+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'when invoked with a `-V` flag, the command-line interface prints the version to `stderr`', opts, function test( t ) {
	var cmd = [
		EXEC_PATH,
		fpath,
		'-V'
	];

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			t.strictEqual( stdout.toString(), '', 'does not print to `stdout`' );
			t.strictEqual( stderr.toString(), PKG_VERSION+'\n', 'expected value' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the army size dataset (comma-separated values)', opts, function test( t ) {
	var expected;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		'--data army'
	];

	expected = readFileSync( resolve( __dirname, '..', 'data', 'army.csv' ) );

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			stdout = stdout.toString();
			expected = expected.toString();
			t.strictEqual( stdout, expected, 'prints CSV' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the cities dataset (comma-separated values)', opts, function test( t ) {
	var expected;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		'--data cities'
	];

	expected = readFileSync( resolve( __dirname, '..', 'data', 'cities.csv' ) );

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			stdout = stdout.toString();
			expected = expected.toString();
			t.strictEqual( stdout, expected, 'prints CSV' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints the temperature dataset (comma-separated values)', opts, function test( t ) {
	var expected;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath,
		'--data temperature'
	];

	expected = readFileSync( resolve( __dirname, '..', 'data', 'temperature.csv' ) );

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		if ( error ) {
			t.fail( error.message );
		} else {
			stdout = stdout.toString();
			expected = expected.toString();
			t.strictEqual( stdout, expected, 'prints CSV' );
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});

tape( 'the command-line interface prints data for Charles Joseph Minard\'s famous cartographic depiction of Napoleon\'s Russian campaign of 1812 (newline-delimited JSON)', opts, function test( t ) {
	var expected;
	var cmd;

	cmd = [
		EXEC_PATH,
		fpath
	];

	expected = minard();

	exec( cmd.join( ' ' ), done );

	function done( error, stdout, stderr ) {
		var str;
		var i;
		if ( error ) {
			t.fail( error.message );
		} else {
			stdout = stdout.toString().split( RE_EOL );
			for ( i = 0; i < expected.length; i++ ) {
				str = JSON.stringify( expected[ i ] );
				t.strictEqual( stdout[ i ], str, 'returns expected JSON string' );
			}
			t.strictEqual( stderr.toString(), '', 'does not print to `stderr`' );
		}
		t.end();
	}
});
