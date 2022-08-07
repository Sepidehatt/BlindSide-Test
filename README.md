# Video UI browser - Created by React

- you can run the application with 'npm start' syntax.


## Decription : 

- I used styled components for designing this webapp.

- I created a json file with necessary data. 

- whole webapp protected by login, user need to enter an email & password to have access to this webapp data.

- user can see a sidebar menu, with home and videos link,
  
    * in home page :
        - first part is most popular videos. these videos have highest number of views ( you can find this data in videos.json file)
        - second part , you can see list of 9 videos. if user wants to see all videos in the website, click on 'See All'. user can find it at the top of videos.
    
    * in Videos :
      - all videos are here. there are some tag at the top of page. user can filter videos by tags when clicking on them. these tags will add automatically, when user add a new tag to a video ( you can find tag property in json file. user can also change them to see how tags add automatically)
      
      
 to see every videos detail, click on video that you want to watch.
  
  * Video Detail page :
    - user can watch video, and see details of video, like creator name and image,video description etc.
    - user can see related videos (by tag) , at right bar.
    -there is a field for comment in the bottom. when user click on that, it displays the comment input and also previous comments.
