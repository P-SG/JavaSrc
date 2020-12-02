package GalagaGame;

import java.awt.Image;

public class AlienShotSprite extends Sprite {
	private GalagaGame game;

	public AlienShotSprite(GalagaGame game, Image image, int x, int y) {
		super(image, x, y);
		this.game = game;
		dy = +3;
	}
	@Override
	public void move() {
		super.move();
		if (y > 600) {
			game.removeSprite(this);
		}
	}


	@Override
	public void handleCollision(Sprite other) {

		if (other instanceof StarShipSprite) {
			game.removeSprite(other);
			game.removeSprite(this);
		
		}
	}

}
