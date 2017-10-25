# @vivintsolar-oss/web-vs-input

```
npm install @vivintsolar-oss/web-vs-input
// or
// yarn add @vivintsolar-oss/web-vs-input
```


## VSInput

Our input field adds some useful state changes along with keeping the look and feel consistent across multiple web apps.

``` javascript
import VSInput from '@vivintsolar-oss/web-vs-input';

  <VSInput
    label="First Name"
    error={ this.state.error }
    reference={ (input) => {
      this.firstNameInput = input;
    } }
  />

```

## Properties

| Name | Default | Type | Description |
|:----- |:------ |:---- |:----------- |
| reference |  | function | Ref function used to hoist state |
| label | label | string | The text for your label |
| error | null | string | The error message displayed |
| disable | false | boolean | Shows boolean state |
| active | false | boolean  | Shows active state |
| dark |  | boolean | If being used on a dark background |
