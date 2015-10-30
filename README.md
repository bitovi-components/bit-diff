# bit-diff

## ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```html
<script type='text/stache' can-autorender>
	<can-import from="bit-diff"/>
	<bit-diff old-text="old text" new-text="new text"></bit-diff>
</script>

<script src='./node_modules/steal/steal.js'
	main="can/view/autorender/"></script>
```

## Parameters

* `old-text` (required): The original text being replaced.
* `new-text` (required): The new text that is replacing the original.
* `mode`: Numeric value, which mode to start the diff in. Options: `0` for side-by-side, `1` for inline. Default to inline.