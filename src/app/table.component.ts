import { Component } from '@angular/core';
import { Table } from '@ng-holistic/clr-list';
import { Subject, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// Provide table UI definition in js object
const definition: Table.Definition = {
    cols: [
        {
            id: 'title',
            title: 'Title',
            sort: true
        },
        {
            id: 'amount',
            title: 'Amount',
            sort: false
        }
    ]
};

// Provide data for the table
const rows: Table.Row[] = [
    {
        id: '1',
        title: 'aaaa',
        amount: 2
    },
    {
        id: '2',
        title: 'bbb',
        amount: 3
    }
];

const dataProvider: Table.Data.DataProvider = {
    load(_) {
        return timer(0).pipe(mapTo({ rows }));
    }
};

@Component({
  selector: 'my-table',
  template: '<hlc-clr-table [definition]="definition" [dataProvider]="dataProvider"></hlc-clr-table>'
})
export class TableComponent  {
  readonly definition = definition;
  readonly dataProvider = dataProvider;
}
