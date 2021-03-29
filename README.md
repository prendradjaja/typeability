Asterisks represent when you would have to use the same finger twice in a row when typing (if you're typing the "textbook correct" way), which is slow (a good keyboard layout tries to avoid / reduce this).

Can be easily configured (requires editing the source code, though) to work with:

- QWERTY (this example) or Dvorak layout
- Same finger twice in a row (this example) or same hand twice in a row

```
$ node main.js
In the beginning, the Universe
            *          *
 was created. This has made a
           *              *
lot of people very angry and b
 *                    *
een widely regarded as a bad m
 *     *         **
ove.
```

----

This repo also contains multi-printer.js, which can be used to do stuff like this:

```
const printer = new MultiPrinter(2); // prints two lines at a time
printer.log('A', 1);
printer.log('bb', 2);
printer.flush();
printer.log(1, 10);
printer.log(2, 20);
printer.log(3, 30);
printer.flush();

// outputs the following

A bb
1 2

1  2  3
10 20 30

// actually, you'll need to set HORIZONTAL_SPACING and VERTICAL_SPACING to 1 for this, but yeah
```
