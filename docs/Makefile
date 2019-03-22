# vim: set noet :

.PHONY: clean install build commit package

clean:
	rm -rf docs

install:
	gitbook install

build: install
	gitbook build

package: clean build
	mv _book docs
	rm docs/.gitignore

commit:
	git add .
	git commit -a

force-repub: package
	git add .
	git commit --amend

publish: commit force-republish
