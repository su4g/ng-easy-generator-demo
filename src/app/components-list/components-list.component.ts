import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ComponentsListComponent implements OnInit {
  @Input() ifShow:unknown;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('do check', this.ifShow);
    
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('content checked');
    
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('view checked');
    
  }

  dragList = [
    {
      name: 'Dropdown',
      icon:'down-square'
    },
    {
      name: 'Input',
      icon:'font-size'
    },
    {
      name: 'RadioGroup',
      icon: 'check-circle'
    }
  ]

  originData = {
    Dropdown: {
      name: 'Dropdown',
      icon: 'down-square'
    },
    Input: {
      name: 'Input',
      icon: 'font-size'
    },
    RadioGroup:{ 
      name: 'RadioGroup',
      icon:'check-circle'
    }
  }

  value: '';
  selectedValue = null;

  done = [
  ];

  selected = 0;
  selectedConfig = {
    name:''
  };

  drop(event: CdkDragDrop<string[]>) {
    this.selected = event.currentIndex;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dragDropped(e) { 
    console.log('dropped',e);
    
  }

  dragExited(e,n,i) { 
    // console.log('dropListExited',e,n,i);
    // this.dragList.splice(i, 0, this.originData[n]);
    // console.log(this.dragList);
  }

  select(item, i) {
    this.selected = i;
    this.selectedConfig = item;
  }
}
