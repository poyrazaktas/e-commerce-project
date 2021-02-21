import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-clasic',
  templateUrl: './product-add-clasic.component.html',
  styleUrls: ['./product-add-clasic.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddClasicComponent implements OnInit {


  model: Product = new Product();
  constructor(private categoryService: CategoryService, private productService: ProductService,
    private alertifyService: AlertifyService) { }

  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
  add(form: NgForm) {
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success(
        data.name + ", başarıyla eklendi."
      )
    })
  }
}
