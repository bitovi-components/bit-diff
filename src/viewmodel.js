import can from "can";
import 'can/map/define/';
import './lib/jsdifflib/difflib';
import './lib/jsdifflib/diffview';
import './lib/jsdifflib/diffview.css!';

export default can.Map.extend({
	define: {
		width: {
			value: '600',
			set: function(newVal) {
				if(newVal.indexOf('%') === -1 && newVal.indexOf('px') === -1) {
					return newVal + 'px';
				}
				return newVal;
			}
		},
		mode: {
			value: 1,
			type: 'number',
			set: function(newVal, setVal) {
				setVal(newVal);
				this.makeDiff();
			}
		}
	},
	oldText: null,
	newText: null,
	output: null,
	makeDiff: function() {
		var base = difflib.stringAsLines(this.attr('oldText')),
            newtxt = difflib.stringAsLines(this.attr('newText')),
            sm = new difflib.SequenceMatcher(base, newtxt),
            opcodes = sm.get_opcodes(),
            output = diffview.buildView({
	            baseTextLines: base,
	            newTextLines: newtxt,
	            opcodes: opcodes,
	            baseTextName: "Current Text",
	            newTextName: "New Text",
	            contextSize: null,
	            viewType: this.attr('mode')
	        });
        this.attr('output', output);
	}
});