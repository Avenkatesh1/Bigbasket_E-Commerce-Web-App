import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../../Service/product.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
 
  productList: any[] = [];
 producService = inject(ProductService);

ngOnInit(): void {
  this.getAllCategory();
}
 getAllCategory(){
  this.producService.getAllCategories().subscribe((data: any) => {
    this.productList = data.data;
 })
}

onDelete(id:number){
  const isDelete = confirm('Are you sure you want to delete this product?')
  if(isDelete){
    this.producService.deleteCategory(id).subscribe((res: any) => {
      if(res.result){
       alert('products has been deleted');
       this.getAllCategory();
    } else{
       alert(res.message);
    }
  })
  } 
}

}