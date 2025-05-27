import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { EditorPreparingEvent } from 'devextreme/ui/data_grid';

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
  yesNoDataSource = [
    { text: 'Yes', value: true },
    { text: 'No', value: false }
  ];

  constructor() {
    // Initialize with some sample data
    this.dataSource = [
      { id: 1, firstField: false, secondField: false, thirdField: false }
    ];
  }

  onEditorPreparing(e: EditorPreparingEvent) {
    if (e.dataField === 'firstField') {
      e.editorOptions.onValueChanged = (args: any) => {
        this.onFirstFieldChanged(args);
        // Update the data source to maintain the value
        if (e.row?.rowIndex !== undefined) {
          this.dataSource[e.row.rowIndex].firstField = args.value;
        }
      };
    } else if (e.dataField === 'secondField') {
      e.editorOptions.visible = this.showSecondField;
      e.editorOptions.onValueChanged = (args: any) => {
        this.onSecondFieldChanged(args);
        // Update the data source to maintain the value
        if (e.row?.rowIndex !== undefined) {
          this.dataSource[e.row.rowIndex].secondField = args.value;
        }
      };
    } else if (e.dataField === 'thirdField') {
      e.editorOptions.visible = this.showThirdField;
      e.editorOptions.onValueChanged = (args: any) => {
        this.onThirdFieldChanged(args);
        // Update the data source to maintain the value
        if (e.row?.rowIndex !== undefined) {
          this.dataSource[e.row.rowIndex].thirdField = args.value;
        }
      };
    }
  }

  onFirstFieldChanged(e: any) {
    console.warn('First field changed:', e.value);
    this.showSecondField = e.value;
    if (!e.value) {
      this.showThirdField = false;
      // Reset the values when first field is false
      this.dataSource.forEach(row => {
        row.secondField = false;
        row.thirdField = false;
      });
    }
  }

  onSecondFieldChanged(e: any) {
    console.warn('Second field changed:', e.value);
    this.showThirdField = e.value;
    if (!e.value) {
      // Reset the third field value when second field is false
      this.dataSource.forEach(row => {
        row.thirdField = false;
      });
    }
  }

  onThirdFieldChanged(e: any) {
    console.warn('Third field changed:', e.value);
  }
}
