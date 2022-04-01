class Iron{
	constructor(x, y, width, height, option) {
	var options = {
		'restitution':0.8,
		'friction':0.3,
		'density':30
	}
	    this.body = Bodies.rectangle(x, y, width, height, options);
	    this.width=width;
		this.height=height;
		World.add(world, this.body);
	}
	display()
	{
			var ironP =this.body.position;
			var angle = this.body.angle;

			push();
			translate(ironP.x, ironP.y);
			rotate(angle);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("gray");
			fill("gray");
            
            rect(0, 0, this.width, this.height);

			pop();
	}

}