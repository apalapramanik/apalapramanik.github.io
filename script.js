var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: 'figures/bg-forest.jpg',
        blendingMode: 'multiply',
        stretchMode: ['stretch', 'stretch']
    },
    
    states: {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#485563', '#556270']
                
            ],
            transitionSpeed: 5000
        }
    }
});