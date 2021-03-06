package GalagaGame;

import java.awt.Image;

//포탄 모델링
public class Boom extends Sprite {
	private GalagaGame game;

	public Boom(GalagaGame game, Image image, int x, int y) {
		super(image, x, y);
		this.game = game;
		dy = -3;
	}

	@Override
	public void move() {
		super.move();
		if (y < -100) {
			game.removeSprite(this);
		}
	}

	@Override
	public void handleCollision(Sprite other) {

		if (other instanceof AlienSprite) {
			game.removeSprite(this);
			game.removeSprite(other);
		}
	}

}
