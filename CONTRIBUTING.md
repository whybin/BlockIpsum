Contributing to Block Ipsum
===========================

Contributions are very much appreciated! Be it a code contribution,
documentation addition, typo correction, bug report, or suggestion.

I'm quite new to this and easily fall prey to tunnel vision.

Bug Reporting
-------------

If through a quick search you believe the bug has not yet been reported, open up
a new issue [here](https://github.com/whybin/BlockIpsum/issues) with the label
`bug`.

Please include as much of the following as possible:
* `Sketch` app version
* `Block Ipsum` build version
* `NodeJS` version (if working on a fork)
* Error messages
* Steps to reproduce the bug
* Screenshots of the buggy behavior

Ideas / Suggestions
-------------------

Also feel free to open a new issue for ideas with the label `enhancement`.

Pull Requests
-------------

Before contributing code, ensure you have the following installed:
* [git](https://git-scm.com/downloads)
* [NodeJS](https://nodejs.org/en/download/)
* [Sketch](https://sketchapp.com/)

If wanting to tackle an `issue`, please make a comment to that effect on the
`issue`'s page.

To fork this repository:

```
$ git clone https://github.com/whybin/BlockIpsum.git
$ cd <path to BlockIpsum repo>
$ npm install
```

**Note:** Installing `npm` modules can take... a while

Then `checkout` a dev/fix/feature branch and start working!

All code contributions must adhere to certain stylistic conventions. Before
submitting a pull request, ensure you have done the following:
* For each added function, write [JSDoc](http://usejsdoc.org/) documentation
    * To generate documentation from written comments:

    ```
    $ npm run-script docs
    ```

* Lint your code with the command:

    ```
    npm run-script lint
    ```

If there are no problems, then submit the pull request! Acceptance of PRs will
be based on adherence to the above and relevance to the intent of this plugin.

More Notes on PRs
-----------------

Please use the `.js` extension for code files.

Use JS-style syntax over CocoaScript.

```
modal.runModal(); // Yes
[modal runModal]; // No
```
