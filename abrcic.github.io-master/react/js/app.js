/*global app, $on */
(function () {
	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) {
		this.utils = new app.utils(name);
		this.todoModel = new app.todoModel(this.utils);
		this.todoItem = new app.todoItem();
		this.footer = new app.footer(this.todoItem);
		this.app = new app.app(this.todoModel, this.footer);
	}

	var todo = new Todo('todos-react');

	function setView() {
		todo.app.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
})();