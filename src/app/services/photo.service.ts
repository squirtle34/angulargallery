import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Photo } from "../interfaces/Photo";

@Injectable({
  providedIn: "root",
})
export class PhotoService {
  URI = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) {}

  createPhoto(title: string, photo: File) {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("image", photo);
    return this.http.post(this.URI, fd);
  }

  getPhotos() {
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }
}
