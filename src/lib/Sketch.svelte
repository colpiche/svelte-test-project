<script>
	import P5 from 'p5-svelte';

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(300, 300);
		};

		p5.draw = () => {
			p5.background(200);
			p5.rotate(p5.radians(rotationZ));
			//rotateX(radians(rotationX));
			//rotateY(radians(rotationY));
			p5.rect(100, 100, 50, 50);
			// p5.describe(`red horizontal line right, green vertical line bottom. black background.`);
		};
	};
</script>

<P5 {sketch} />