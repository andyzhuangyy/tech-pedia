# vim: set noet :

.PHONY: clean install build package

clean:
	rm -rf docs
	rm -rf _book

install:
	gitbook install

build: clean install
	gitbook build

package: build
	mv _book docs
	git add .
	git commit -a

