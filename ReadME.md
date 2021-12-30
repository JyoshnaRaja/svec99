### Front-end Technologies

- HTML
- CSS
- Java Script
- Bootstrap framework
- Angularframework
- React js

### back-end Technologies


- Node.js
       - express.js
       - nodemoon
       - cors
- PHP
- c3
- Java
- Python

### databases

- Mongodb
-  Mysql
- sqlite
- firebase
- postgressql
- Oracle

+ vcs  (Source code management) 
    - Distributed vcs
          - git,mercurial
     - Remote(central) vcs
           - github,bitbucket


 ###   Git
- git init
- git add filename
- git add filenanme1 filename2 
-git add . or git add --all
- git status  
 - do configurations (set your user.name and user.email)  
- commit data with commit message 
- adding remote to git
    -  git remote add origin https://github.com/JyoshnaRaja/svec99.git
- accesing the remote
      - git remote
### pushing git to github
- git push -u origin master
- url login will be created next we shholud copy that url and add that link to chrome tab
 -  click on authentication
-  git is pushed into github
- git update
       - after updating in git  and saving
       - check  get status(git status)
       -  add the modified file(git add .)
       -  commit by using (git commit -m "file is modified")
       - push into gethub(git push -u origin master)
### html5
- hyper text markup language
- html-browsers
        - opera
         - saphari
- sematic elements
      -  header
      - section
      - article
      - aside
      - footer
      - table
### animation elements   
     - audio elemnts
     - video elements
     - canvas ,progress ,meter
     - data list
     - select
- block level elements
      - occupy entire width of the browser
      - starts from new line
      -  when applied style total width of element will be effected with style
      - h1 to h6
      - p
      - div
      - all sematic elements 
      - text will start from new line       
- inline elements
      - when applied style only that particular element will be effected with style
      - span
      - img
      - a
      - nav
      - form
      - input
      - text area
      - legend
      - sup
      - sub
      - ul (gives output using bullets)
      - ol (gives output using numbers like 1,2,3..)

task 1:
=====
   - audio
   - video
   - canvas
   - progress
   - datalist
   - meter
   - select
### css
  - cascading Style Sheets
  - inline css
  - internal css
  - external css
  + syntax for css
    '''''
       selector{
               properties
       }
       ''''''
### box model
- text
- padding
       - padding: 10px (for alladjacent sides)
       - padding :10px 30px (10px fro top and 30px for left and right)
       - padding :10px 300px 50px (10px fro top and 300px for left and right and 50px for bottom)
       - padding :10px 30px 4px 50px (top,right,bottom,left)
- border
- margin
- width and height
- 1 rem=16px
##### selectors
  + simple selctors
       - universal selector(*)
       - by element name
       - grouping selector(,)
       - class selector(.)
       - id selector(#)

  + combinators
       + descendant selector( )
       + child selector(>)
       + adjacent sebling selector(+)
       + general sibling selector(~)
+ pseudo class selector
+ pseudo element selector
+ attribute selector


+ display
    - none
    - inline
    - block
    - inline block
+ position
    - static
    - relative
    - absolute
    - fixed
    - sticky
+ align content
+ align items
+ align self

###  animations
#### responsive web design
#### flex-box

- display
    - flex
        - flex wrap
        - justify content
        - flex direction
        - flrex flow
#### task 2:
- indexpage.html
- login.html
- register.html
### media queries
- extra small devices(mobiles)
         - max-width:600px
- small devices(large phones,small tabs)
         - min-width:600px
          - max-width:767px
- medium devices(small laptops)
         - min-width:768px
- large devices(large laptops/desktops)
         - min-width:992px
- extra large devices()
         - min-width:1200px

''''
@media only screen(max-width:320px){
      css code
}
if we wnat add another break point and should be added after the first break
here max-width is first break
''''
### task 3:
======
   
      navbar with responsive

- module(collections of funtions,classes or any code)
- package (collection of modules)
- library (collection of packages)
- framework(collections of library)
+ module   -->  package --> library -->  framework 

======
### boostrap4.6


- it is a css framework
+ types os bootmodes
     - offline
        - classes used(default styles cannot be over write)
           - jambotron
           - container-fluid
           - bg-primary

     - online
         - CDN links
              

+ background-color - bg
+ text-white

+ margin in boodtrap(m-* (0.5))
      - 0 --> 0rem
      - 1 --> 0.25rem(4px)
      - 2 --> 0.5rem(8px)
      - 3 --> 1rem(16px)
     + magin-left(ml)
      + margin in all directions(m)
      + margin top(mt)
      + margin bottom(mb)
      + margin right(mr)
- padding (padding-left  --> pl-5) 

+ booster color classes
      - primary
      - secondary
      - info
      - warning
      - danger
      - light
      - dark
      - white
      - model-title

+ we can ude color classes for 
         - buttons(btn btn-primary)
         - text (text-white)
         - background(bg-secondary)
         - aletrs (alert alert-primary)

#### cards
  - class="card-deck"(the cards will be exited one by one in a column manner)
  - (class="card-deck" mt-2) will display the cards one after one
### justify content
- space equal
- space around
### marqueue
+ grid system
     - sm(small devices)
     - md(medium devices)
     - lg(large devices)
     - xl(extra large devices)
     - clo-sm-12 for small devices
#### models
+ tables
- day 4
#### javascript
+ to apply dynamic behaviour for a website
+ text based programming language and we can use in client side and server side(node.js) for web applications
+ in 1995 ' breden eich' intoduced javascript (ES-262)
+ javascript is loosly touple amd dynamic language
+ (EMCA -script)- es-11(latest version)
    - let & constant
    - map()
    - arrow funtion
    - classes
    - spread operator
    - rest parameter
+ datatypes
  - number(default)
  - BigIn(2^53-1)(recently added)
  - string
  -  boloean
  - undefined(hosting interview question)
  - null
  - object
  - arrays
+ variables 
    - var,let &constant
    - scope
       - function --> var
       - block level  -->var, let(can be used to redefine the prevoius value)& const(can't change the value)
    - redefine -only var,let and not const- using this we can modified the given value
    - redeclare-only var and not let and const
+    typeof()
+ object

.....
{
      name:"renu"
}
.....
+ array

### alerts


+ to generate notifications
   - alert
   - prompt( to take input from user)
   - confirm


+ console statements
    - console.log()
    - console.info()
    - console.warn()
    - console.error()

+ spread operator
'''
    
    ...variable name

'''
+ rest operator
   + to handle function parameters
''''
    ...paramter
''''


+ destructure of array and objects


+ functions

   - function with function name
   ''''
       function demo(){
              return statement;
       }
       demo()
   ''''
- anonymous funtion
'''' 
     let demo=function(x,y){
           return x+y
     }

''''
- arrow funtion
'''' 
   let demo=(x,y)=>{
          return x*y
   }
   console.log(demo(2,3))
'''''
+ loops
     -   for -in(prints index numbers)
     -   for(prints index value)
     - for-of(prints index values)
     - for-each() -->(es-5)
     - MAP() --> (ES-6)

### dom
      - document object model
      - document
      - history
      - window
      - navigator
+ dom methods
   -  'getElementById'
   -   'getElementByClassname'
   - querySelector
   - inner text
   - text content
   - append
   - appendChild
   - inner html
   - set attribute()
   - class list
   - style
   - src

### JSON
+ java script object notation
      - to exchange information between application ans server 
'''''
{
    " name":"jyoshna",
     "salary":"5lpa",
      "designation":"mern developer"
      "mobile no":234584387438548939859
}
'''''
+ Ajax call or promises (fetch API ) OR axios
#### REFRENCE LINKS
-  flaticon[https://flaticon.com]
-  html color codes[https://htmlcolorcodes.com/]
-  webaim[https://webaim.org/resources/contrastchecker/]
- freesvg[https://freesvg.org/]
- getbostrap[https://getbootstrap.com/docs/4.6/getting-started/introduction/]
- jsonlit[to check the errors in javaScript]




















































































































































































