import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-grid-view',
  standalone: true,
  imports: [DxDataGridModule],
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent {
  dataSource: any[] = [];
  showSecondField = false;
  showThirdField = false;

  constructor() {
    // Initialize with some sample data
    this.dataSource = [
      { id: 1, firstField: false, secondField: false, thirdField: false }
    ];
  }

  onEditorPreparing(e: any) {
    if (e.dataField === 'secondField') {
      e.editorOptions.onValueChanged = (args: any) => {
        this.onSecondFieldChanged(args);
      };
    } else if (e.dataField === 'thirdField') {
      e.editorOptions.onValueChanged = (args: any) => {
        this.onThirdFieldChanged(args);
      };
    }
  }

  onRowUpdating(e: any) {
    if (e.newData.firstField !== undefined) {
      this.onFirstFieldChanged({ value: e.newData.firstField });
    }
  }

  onFirstFieldChanged(e: any) {
    console.warn('First field changed:', e.value);
    this.showSecondField = e.value;
    if (!e.value) {
      this.showThirdField = false;
    }
  }

  onSecondFieldChanged(e: any) {
    console.warn('Second field changed:', e.value);
    this.showThirdField = e.value;
  }

  onThirdFieldChanged(e: any) {
    console.warn('Third field changed:', e.value);
  }
}
