//rest-api.service.ts - Type script file to provide REST(GET,POST) Services in the elearning application

//including required files and services
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./models/user";
import { Product } from "./models/product";
import { Subject } from "rxjs";
import { Contact } from "./models/contact";

//exporting the RestAPi Service
@Injectable()

export class RestApiService {

  private products: Product[] = [];
  private products$ = new Subject<Product[]>();
  private URL = 'http://localhost:3090';
    
  constructor(private http: HttpClient) {}

  getHeaders() {
    const token = localStorage.getItem("token");
    return token ? new HttpHeaders().set("Authorization", token) : null;
  }

  getUsers() : Promise<void | User[]>{
    return this.http.get(this.URL + '/users/')
      .toPromise()
      .then(response => response as User[])
      .catch(this.handleError);
  }

  getProducts() : Promise<void | Product[]>{
    return this.http.get(this.URL + '/products/')
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  getProductsByUserid(userid : string) : Promise<void | Product[]>{
    return this.http.get(this.URL + '/products/'+ userid)
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  getProduct(productId: string) : Promise<void | Product>{
    return this.http.get(this.URL + '/product/' + productId)
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }

  getSingleUser(userId: string): Promise<void | User>{
    return this.http.get(this.URL + '/users/' + userId)
    .toPromise()
    .then(response => response as User)
    .catch(this.handleError);
  }

  // updateFood(newFood: Food): Promise<void | Food> {
  //   return this.http.post(this.foodsUrl + '/' + newFood._id, newFood)
  //   .toPromise()
  //   .then(response => response as Food)
  //   .catch(this.handleError);
  // }

  deleteProduct(productId: string): Promise<void | Product>{
    return this.http.get(this.URL + '/products/delete/' + productId,)
    .toPromise()
    .then(response => response as Product)
    .catch(this.handleError);
  }
    
  createUser(newUser: User): Promise<void | User> {
    return this.http.post(this.URL + '/users/', newUser)
    .toPromise()
    .then(response => response as User)
    .catch(this.handleError);
  }

  saveContact(contact: Contact): Promise<void | Contact> {
    return this.http.post(this.URL + '/contacts/', contact)
    .toPromise()
    .then(response => response as Contact)
    .catch(this.handleError);
  }

  updateUser(user : User) : Promise<void | User> {
    const data = new FormData();
    data.append("name", user.name);
    data.append("email",user.email);
    data.append("password", user.password);
    data.append("image",user.image,user.imagePath);
    return this.http.post(this.URL + '/user/'+ user._id, data)
    .toPromise()
    .then(response => response as User)
    .catch(this.handleError);
  }

  // createProduct(product: Product): Promise<void | Product> {
  //   return this.http.post(this.URL + '/products/', product)
  //   .toPromise()
  //   .then(response => {response as Product
  //   })
  //   .catch(this.handleError);
  // }

  
  createProduct(name: string, description: string, price: string, image: File,fullname: string,
    address: string, state: string, phonenumber : string, status: string, userid: string): void {
    const data = new FormData();
    data.append("title", name);
    data.append("description",description);
    data.append("price", price);
    data.append("image", image, name);
    data.append("fullname", fullname);
    data.append("address", address);
    data.append("state", state);
    data.append("phonenumber", phonenumber);
    data.append("status", status);
    data.append("userid", userid);
    this.http
      .post<{ product: Product }>(this.URL + '/products/', data)
      .subscribe((productData) => {
        const product: Product = {
          _id: productData.product._id,
          title: name,
          description: description,
          price : price,
          imagePath: productData.product.imagePath,
          fullname : fullname,
          address: address,
          phonenumber : phonenumber,
          status: status,
          state: state,
          isSelected : false,
          userid : userid,
        };
        this.products.push(product);
        this.products$.next(this.products);
      });
  }
    
  private handleError(error: any){
    console.log("error");
  }

}
