# Video Browser UI

## Used Libraries & Packages 
- React
- Styled Components
- Material UI

## How to run
```
npm start
```

## Decription 

- A JSON file has created with necessary data like video tags, links, etc. 

- Protected by login. that said, user needs to enter its credential (email & password) to get access to contents.

- User sees a sidebar menu, with Home and Videos buttons.
  
    * Home page:
        - Has a "Most Popular Videos" containing the most popular videos. These videos have highest number of views (you can find this data in videos.json file).
        - In the second section in Home page, user sees nine first videos of the list. If they wants to see all videos, clicks on "See All". 
    
    * Videos:
      - All videos are listed here. There are predefined tags at top of the page. User can filter videos by clicking on tags. These tags will be added automatically, if user add a tag to a video (you can find tag property in JSON file. User can also change them to see how tags are added automatically).
      
In order to see details of a video, click on video that you want to watch.
  
  * Video Detail page:
    - User can watch video and see details, like creator name and its image, description etc.
    - User can see related videos (by tag), at right bar.
    - There is a field for comment in the bottom. When user click on that, it displays the comments and the input box.
