Block Ipsum - a Sketch plugin
=============================

Generate skinny rectangles as text placeholders!

![Demo
gif](https://raw.githubusercontent.com/whybin/files/master/Block-Ipsum-Demo.gif)

Installation
------------

For `macOS`

Requires `Sketch`

* Clone this repo or download the [latest release](https://github.com/whybin/BlockIpsum/releases)
* Double-click the `BlockIpsum.sketchplugin` package
    * Or manually move it to the `plugins` directory
    * Find the `plugins` directory: `Plugins > Manage Plugins... > ⚙ > Reveal
      Plugins Folder`

Usage
-----

* First, select one or multiple shapes/paths (open or closed, doesn't matter!)
* `Plugins > Block Ipsum > Generate Text Blocks`
    * Or `Command + Shift + x`
* Enter configurations if you want (empty fields use default values or
  calculations)
    * **Font size:** Generated rectangle heights are calculated as the cap
      height of the given font size
    * **Line spacing:** Vertical spacing per line
    * **Horizontal precision:** The smaller the value, the closer that shape
      widths adhere to the actual horizontal boundaries of the selected shape
        * For faster computation, it is recommended to set at least `6`
        * By default, this value is set at half of the font size
* `OK`

TODO
----

* Alert error messages
* Check if selected shape is a rectangle (at a 90° multiple rotation) and use
simplified computation
* Newly created shapes should reflect style of original shape (e.g. same color)
* Tests?

Contributing
------------

See
[CONTRIBUTING.md](https://github.com/whybin/BlockIpsum/blob/master/CONTRIBUTING.md)
