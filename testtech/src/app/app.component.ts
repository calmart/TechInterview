import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

const INVDATA : any= [

{ 
"itemname": '',
"itemnumber": '',
"expirationdate": '',
},
];

const schema = [
{
	key: "itemname",
	type: "text",
	label: "Item Name",
},
{
	key: "itemnumber",
	type: "number",
	label: "Item Number",
},
{
	key: "expirationdate",
	type: "datetime",
	label: "Expiration date",
},
{
  key: "delete",
	type: "delete",
	label: "",
}
];

@Component({
  
  selector: 'app-root',
  template: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  displayedColumns : string[] = ['itemname','itemnumber','expirationdate'];
  dataSource = new INVDATA;
  columnsSchema: any = schema;

  additem(){
    const newRow = {"itemname":"","itemnumber":"","expirationdate":"", delete:true}
    
  }

  removeRow(id: number){
    this.dataSource = this.dataSource.filter((u: any) => u.id !== id);
  }
}
