<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Napoleon's March

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Data for [Charles Joseph Minard][minard]'s famous cartographic depiction of Napoleon's Russian [campaign of 1812][campaign-of-1812].

<section class="intro">

<!-- <image class="image" align="center" alt="Napoleon's March"> -->

<div class="image" align="center">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aff3d7765cbe11f4df0c8fef93c02bc4d3ba8874/lib/node_modules/@stdlib/datasets/minard-napoleons-march/docs/img/minard.png" alt="Napoleon's March">
    <br>
</div>

<!-- </image> -->

</section>

<!-- /.intro -->











<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/datasets-minard-napoleons-march-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

## Usage

```text
Usage: minard-napoleons-march [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --data name           Dataset name: army, cities, temperature.
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the `--data` option is set to a supported dataset name, the output format is comma-separated values ([CSV][csv]). Otherwise, the output format is newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```bash
$ minard-napoleons-march --data army
lon,lat,size,direction,division
24.0,54.9,340000,A,1
24.5,55.0,340000,A,1
25.5,54.5,340000,A,1
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Minard, Charles Joseph. 1869. [_Tableaux graphiques et cartes figuratives_][@minard:1869a]. Ecole nationale des ponts et chaussées.
-   Wilkinson, Leland. 2005. _The Grammar of Graphics_. Springer-Verlag New York. doi:[10.1007/0-387-28695-0][@wilkinson:2005a].

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under a [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/datasets-minard-napoleons-march`][@stdlib/datasets-minard-napoleons-march]</span><span class="delimiter">: </span><span class="description">data for Charles Joseph Minard's cartographic depiction of Napoleon's Russian campaign of 1812.</span>


</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/datasets-minard-napoleons-march-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/datasets-minard-napoleons-march-cli

[test-image]: https://github.com/stdlib-js/datasets-minard-napoleons-march/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/datasets-minard-napoleons-march/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/datasets-minard-napoleons-march/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/datasets-minard-napoleons-march?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/datasets-minard-napoleons-march.svg
[dependencies-url]: https://david-dm.org/stdlib-js/datasets-minard-napoleons-march/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/datasets-minard-napoleons-march#cli
[cli-url]: https://github.com/stdlib-js/datasets-minard-napoleons-march/tree/cli
[@stdlib/datasets-minard-napoleons-march]: https://github.com/stdlib-js/datasets-minard-napoleons-march/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/datasets-minard-napoleons-march/tree/deno
[deno-readme]: https://github.com/stdlib-js/datasets-minard-napoleons-march/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/datasets-minard-napoleons-march/tree/umd
[umd-readme]: https://github.com/stdlib-js/datasets-minard-napoleons-march/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/datasets-minard-napoleons-march/tree/esm
[esm-readme]: https://github.com/stdlib-js/datasets-minard-napoleons-march/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/datasets-minard-napoleons-march/blob/main/branches.md

[minard]: https://en.wikipedia.org/wiki/Charles_Joseph_Minard

[campaign-of-1812]: https://en.wikipedia.org/wiki/French_invasion_of_Russia_%281812%29

[@minard:1869a]: http://patrimoine.enpc.fr/document/ENPC01_Fol_10975?image=54#bibnum

[@wilkinson:2005a]: https://doi.org/10.1007/0-387-28695-0

[reaumur-scale]: https://en.wikipedia.org/wiki/R%C3%A9aumur_scale

[geojson]: http://geojson.org/

[csv]: https://tools.ietf.org/html/rfc4180

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
