import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { environments } from 'environment/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'twitter-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent {

  @ViewChild('tweetText') tweetText: ElementRef;
  uploadedFile: any;
  isLoading: boolean = false;

  constructor(private http: HttpClient,private authService: AuthService){}
  onImageUpload(event:any){

    this.uploadedFile = event.target.files[0];
  }

  uploadImage(file: File) {
    const userDataString = localStorage.getItem('user');
    const userData = userDataString!==null ? JSON.parse(userDataString): null;

    const apiUrl = 'https://api.imgbb.com/1/upload';
    const apiKey = '1182d321e1f85bac4eac738b88712a41';
    const params = {
      expiration: '600',
      key: apiKey,
    };
  
    const formData = new FormData();
    formData.append('image', file);
  
    this.http.post(apiUrl, formData, { params }).subscribe(
      (res: any) => {
        if(res.success){
          const url = environments.appUrl+'api/tweet/save-image ';
          const tweetObject = {
            url: res.data.display_url,
            userId : userData.id
          };
      
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
      
           this.http.post(url, tweetObject, { headers, withCredentials: true }).subscribe(response =>{
            console.log('response from inner call'+ response);
            const body = {
              tweetText: this.tweetText.nativeElement.value,
              userId:  userData.id  
            };
            const url = environments.appUrl+'api/tweet';
          
               this.http.post(url, body, { headers, withCredentials: true }).subscribe(tweetRes => {
                this.isLoading =false;
                console.log(tweetRes);
              });
           });

            }
      },
      (error) => {
        console.error(error);
        // Handle errors if the request fails
      }
    );
  }

  onTweetPost(){
    // const userDataString = localStorage.getItem('user');
    // const userData = userDataString!==null ? JSON.parse(userDataString): null;
   
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    this.isLoading =true;
    if(this.uploadedFile){
       this.uploadImage(this.uploadedFile);
    }
   

  }
}
