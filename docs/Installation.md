## Run this gitbook locally
* `npm install gitbook-cli -g`
* `npm install`
* `brew install graphviz` (uml platform needed so we should install graphviz)  
* make a soft link of plantuml.jar at or just copy it to project root
* `gitbook install` to install necessary plugins
* `gitbook serve`
* then goto http://localhost:4000 to check the result

## Generate PDF
`np m install gitbook-pdf -g`
 
`gitbook pdf ./my_repository`

## Appendix

    gitbook --version
    CLI version: 2.3.2
    GitBook version: 3.2.3