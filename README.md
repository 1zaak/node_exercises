Programming Challenge 101
=========================

### QUESTIONS
1. Write a program that will generate four(4) types of printable random
objects and store them in a single file, each object will be separated by
a ",".  These are the 4 objects: alphabetical strings, real numbers,
integers, alphanumerics. The alphanumerics should contain a random
number of spaces before and after it (not exceeding 10 spaces).
The output should be 10MB in size.

> Sample extracted output :

> hisadfnnasd, 126263, assfdgsga12348fas, 13123.123,
> lizierdjfklaasf, 123192u3kjwekhf, 89181811238,122,
> nmarcysfa900jkifh  , 3.781, 2.11, ....


2. Create a program that will read the generated file above and print to
the console the object and its type. Spaces before and after the
alphanumeric object must be stripped.

> Sample output :

> youruasdifafasd - alphabetical strings
> 127371237 - integer
> asdfka12348fas - alphanumeric
> 13123.123 - real numbers
> asjdfklasdjfklaasf - alphabetical strings
> 123192u3kjwekhf - alphanumeric


### SOLUTION
1. Run ```npm install```
2. Run ```npm start``` and wait for awhile for it to generate the output in ```output/output.txt```
3. Set the ```OUTPUT_SIZE (in line 6: writer/program.js)``` to ```10485760 (10MB), 1048576 (1MB), or 1024 (1KB)``` if desired.
4. Run ```npm run read``` and wait for awhile for it to generate the output in ```output/result.txt```
