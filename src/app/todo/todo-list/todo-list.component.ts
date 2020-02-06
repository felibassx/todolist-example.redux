import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import * as fromFiltro from '../../filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: fromFiltro.filtrosValidos;

  constructor( public store: Store<AppState> ) { }

  ngOnInit() {
    this.store.subscribe( state => {

      // console.log(state.todos);
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
