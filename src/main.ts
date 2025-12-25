import { Notice, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		// This runs when the plugin is enabled or Obsidian starts with it enabled
		console.log('Loading MyPlugin');

		// Example: Add a simple status bar item
		const statusBarItem = this.addStatusBarItem();
		statusBarItem.setText('MyPlugin loaded');

		// Example: Add a ribbon icon (left sidebar)
		this.addRibbonIcon('dice', 'Greet', () => {
          new Notice('Hello, world!');
        });

		// Example: Add a command (accessible via Command Palette)
		this.addCommand({
			id: 'my-plugin-example-command',
			name: 'Run example action',
			callback: () => {
				new Notice('Command executed!');
			}
		});

		// If you have settings, load them here:
		// await this.loadSettings();
		// this.addSettingTab(new MyPluginSettingTab(this.app, this));
	}

	onunload() {
		// This runs when the plugin is disabled or Obsidian closes
		console.log('Unloading MyPlugin');
		
		// Clean up any resources here (e.g., intervals, event listeners)
	}
}