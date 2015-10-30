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

* `old-text` (required): The original text being replaced<sup>1</sup>.
* `new-text` (required): The new text that is replacing the original<sup>1</sup>.
* `mode`: Numeric value, which mode to start the diff in. Options: `0` for side-by-side, `1` for inline. Default to inline.
* `width`: Width of the diff box. Defaults to 600px. Width can be numeric (`600` - assumes px), pixel (`600px`), or percentage (`100%`)

<sup>1</sup>If using an ES6 compiler, multi-line values can be used when enclosed in back-ticks (`` ` ``). Otherwise new-lines (`\n`) should be added. 
