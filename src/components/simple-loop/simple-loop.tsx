import { Component, Element, State } from '@stencil/core';

@Component({
  tag: 'simple-loop'
})
export class SimpleLoop {

  @State() items: Item[];

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.items = [
      { id: 1, label: 'One' },
      { id: 2, label: 'Two' },
      { id: 3, label: 'Three' },
      { id: 4, label: 'Four' },
    ];
  }

  render() {
    return (
      <ul>
        {this.items.map(item => this.renderItem(item))}
      </ul>
    );
  }

  renderItem(item) {
    return (
      <li>
        {item.label}
        <button onClick={() => this.deleteItem(item)}>Delete</button>
      </li>
    );
  }

  deleteItem(itemToDelete: Item) {
    const log = document.createElement('div');
    log.textContent = `Deleting: ${itemToDelete.id} / ${itemToDelete.label}`;
    this.el.appendChild(log);

    this.items = this.items.filter(item => item.id !== itemToDelete.id).map(item => ({...item}));
  }
}

interface Item {
  id: number;
  label: string;
}
