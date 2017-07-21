# angular-tel-input

An AngularJS component supporting 10-digit telephone input fields based on the North American Numbering Plan (does not support all phone conventions).

## Installation

This Angular component is available via bower and npm. To install:

`bower install angular-tel-input --save`

OR

`npm install angular-tel-input --save`

## Usage

You must either bundle the installed script in your app via build scripts or include directly in your HTML:

```html
<script src="path/to/source/dist/angular-tel-input.min.js" type="text/javascript"></script>
```

Include the module in your application:

```javascript
angular.module('app', ['ngTelInput']);
```

Include the component in a form where needed:

```html
<ng-form name="Form">
  <tel-input input-name="'phone'" is-required="true" number="phoneNumber" on-change="change()" on-blur="blur()" on-focus="focus()"></tel-input>
</ng-form>
```
The following bindings are supported:

  - number (required): This is the model we want to update. Note that the raw, unformatted number will be bound rather than the formatted value.
  - inputName (optional): This must be a string, and represents the input name. This can be useful with forms. If using form validation, you must use ngForm.
  - isRequired (optional): Whether the input should be required or not as part of the form.
  - onChange (optional): A function to call when the value changes.
  - onBlur (optional): A function to call when the input is blurred.
  - onFocus (optional): A function to call when the input is focused.

## Demo

[https://thimbleprojects.org/carlosrymer/139559](https://thimbleprojects.org/carlosrymer/139559)

## Contributing

Want to contribute? Great! It's very simple. Just make a pull request and I'll review your changes as soon as possible.

## Todos

 - Write Unit Tests

## License

MIT
