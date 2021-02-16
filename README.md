# spring-sum-up

## Installation

`npm install --save react-animated-text`

## Documentation

<a href="">
        <p style="color: green">See Live Examples on CodeSandbox</p>
</a>

<p>
spring-sum-up allows you to add a magnifying glass effect on an image, or short sentences, to a page. So, you can install this package you will have a div in which you determine all the necessary parameters to have an image in the backgroung.
</p>
<p> 
CSS and implemented with React Spring to animate magnifying divs. It also allows to determine the size of the container div and the size of the magnifying divs.
Here's the most basic way to add the package to your page:
</p>

```
import React from 'react';
import { SpringSumUp } from 'spring-sum-up';

    	<SpringSumUp
    			backgroundImage="url(https://static.toiimg.com/photo/72975551.cms)"
    			widthContent="50%"
    			height="100vh"
    			width="100%"
    		/>

```

<p>
Just import the component you want to use and then use it somewhere.
All adjustable parameters are defined by default,(but of course you can modify them) the size of the container div, the size of the divs with the magnifying glass effect, the number of magnifying divs, parameters related to the background image such as background-size, background-repeat, background-color, background-position.
</p>
<p>You can see below all the parameters you can change:</p>

<table>
    <thead>
        <tr>
            <th>propName</th>
            <th>propType</th>
            <th>defaultValue</th>
            <th>isRequired</th>
            <th>Explanation</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>backgroundImage</td>
            <td>string</td>
           <a href="(https://www.partir.com/
            images/incontournables/japon-hakone
            -fuji.jpg"> 
                <td>
                'url(https://www.partir.com/
                images/incontournables/japon-hakone
                -fuji.jpg)'
                </td>  
          </a>
            <td>Yes</td>
            <td>
                This parameter allows to set the background image, container div and the magnifying div</td>
        </tr>
        <tr>
            <td>height</td>
            <td>string</td>
             <td>
            '700px'
            </td>
            <td>Yes</td>
            <td>The parameter allows to set the size of the container div. You should use only values in px, or viewport, but not in %.</td>
        </tr>
        <tr>
            <td>width</td>
            <td>string</td>
            <td>
            '100%'
            </td>
            <td>Yes</td>
            <td>The parameter allows to set the size of the container div. You should use only values in px, or viewport, and %.</td>
        </tr>
        <tr>
            <td>width</td>
            <td>string</td>
            <td>
            '100%'
            </td>
            <td>Yes</td>
            <td>The parameter allows to set the size of the container div. You should use only values in px, or viewport, and %.</td>
        </tr>
         <tr>
            <td>widthContent</td>
            <td>string</td>
            <td>
            '100%'
            </td>
            <td>Yes</td>
            <td>The parameter allows to set the size of the container div. You should use only values in px, or viewport, and %.</td>
        </tr>
    </tbody>

</table>
