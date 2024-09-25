import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../Service/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productService = inject(ProductService)
  categoryList: any[] = [];
  productList: any[] = [];

  productObject: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProduct();
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  saveProduct(){
     this.productService.saveProducts(this.productObject).subscribe((res: any) => {
         if(res.result){
          alert('products has been saved');
          this.getAllProduct();
         }else{
          alert(res.message);
         }
     })
  }
  updateProduct(){
    this.productService.updateProducts(this.productObject).subscribe((res: any) => {
      if(res.result){
       alert('products has been Updated');
       this.getAllProduct();
      }else{
       alert(res.message);
      }
  })
  }
  onDelete(id:number){
    const isDelete = confirm('Are you sure you want to delete this product?')
    if(isDelete){
      this.productService.deleteProducts(id).subscribe((res: any) => {
        if(res.result){
         alert('products has been deleted');
         this.getAllProduct();
      } else{
         alert(res.message);
      }
    })
    } 
  }

  onEdit(item:any){
    this.productObject = item;
    this.openSidePanel();
  }

  getAllProduct(){
    this.productService.getAllProducts().subscribe((res: any) => {
      //  console.log(res.data);
       this.productList = res.data;
    })
  }
  getAllCategories(){
    this.productService.getAllCategories().subscribe((res: any) => {
       this.categoryList = res.data;
    })
  }
}
