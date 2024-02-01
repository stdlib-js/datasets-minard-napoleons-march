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

var bench = require( '@stdlib/bench-harness' );
var IS_BROWSER = require( '@stdlib/assert-is-browser' );
var isObjectArray = require( '@stdlib/assert-is-plain-object-array' );
var isObject = require( '@stdlib/assert-is-plain-object' );
var pkg = require( './../package.json' ).name;
var minard = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// MAIN //

bench( pkg, opts, function benchmark( b ) {
	var data;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		data = minard();
		if ( typeof data !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( data ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::subset', opts, function benchmark( b ) {
	var options;
	var data;
	var i;

	options = [
		'army',
		'cities',
		'labels',
		'rivers',
		'temperature'
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		data = minard({
			'data': options[ i % options.length ]
		});
		if ( data.length === 0 ) {
			b.fail( 'should have a length greater than 0' );
		}
	}
	b.toc();
	if ( !isObjectArray( data ) ) {
		b.fail( 'should return an object array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
