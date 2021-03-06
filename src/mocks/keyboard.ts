import { Keyboard } from 'ionic-angular';

export class KeyboardMock {
	public static instance(): Keyboard {
		let instance  = jasmine.createSpyObj('Keyboard', ['isOpen', 'onClose']);
		instance.isOpen.and.returnValue(false);

		return instance;
	}
}
