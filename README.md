# containerQuery
Code to assist with CSS class selection based on container size

## How to use

Add "cQ.init()" to your onload attribute of the body tag

For each element that you want to have updated CSS class selection based on the size of the container do the following

* add cq-styles='{ comma separated list of styles }'
* add cq-breakpoints='{ comma separated list of breakpoints }'

Note: there should be one less breakpoint than styles

The first style is applied below the first breakpoint, the second style is applied between the first and second breakpoints.. and so on
The last style is applied above the last breakpoint

Example: 
`
div cq-styles='mobile,tablet,desktop,huge' cq-breakpoints='375,768,1024'
`

1. Changes the class to mobile when this div is 375px or smaller
2. Changes the class to tablet when this div is between 375px and 768px
3. Changes the class to desktop when this div is between 768px and 1024px
4. Changes the class to huge when this div is 1024px or wider

Note: Other classes may be specified on the DOM element and the cq-styles will be added or deleted as needed.