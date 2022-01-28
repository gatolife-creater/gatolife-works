// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var bar = new ProgressBar.SemiCircle(container, {
    strokeWidth: 6,
    color: '#00CC99',
    trailColor: '#eee',
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2000,
    svgStyle: null,
    text: {
        value: '',
        alignToBottom: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#00CC99' },
    // Set default step function for all animate calls
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        var value = Math.round(bar.value() * 100);
        if (value === 0) {
            bar.setText('');
        } else {
            bar.setText(value);
        }

        bar.text.style.color = state.color;
    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0); // Number from 0.0 to 1.0