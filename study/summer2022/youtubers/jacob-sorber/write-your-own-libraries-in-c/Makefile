

CC = clang
CFLAGS = -Wall -g
BINS = librarytest libmycode.so runtime_librarytest

all: $(BINS)

libmycode.o : libmycode.c mycode.h
	$(CC) $(CFLAGS) -c libmycode.c

# -fPIC = position independant code 
# -shared  = make a shared library
# $@ = target name ie libmycode.so here

libmycode.so: libmycode.c mycode.h
	$(CC) $(CFLAGS) -fPIC -shared -o $@ libmycode.c -lc

# $^ = if the is a c file, it will result in .o file
librarytest: librarytest.c libmycode.o
	$(CC) $(CFLAGS) -o $@ $^

#-lmycode shorthand for -libmycode
runtime_librarytest: librarytest.c
	$(CC) $(CFLAGS) -o $@ $^ -L -lmycode

clean: 
	rm *.o $(BINS)
