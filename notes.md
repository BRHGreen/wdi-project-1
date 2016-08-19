#Slidy Picture Game. 

##The basic game (MVP): 
- The user is presented with a picture divided up into a a squares grid (e.g. a four by four grid of 16 squares) 
- 15 of these 16 squares (or tiles) will contain a section of a picture. The remaining tile will be blank/empty. 
- The 15 squares with sections of picture on them will be mixed up. 
- The user then has to rearrange these 15 tiles by sliding any of the picture tiles adjustment to the empty space and into the empty space until all fifteen of the picture tiles are in order and show a completed picture (bar the one empty tile space).
- When the fifteen picture tiles are in place the 16th empty tile will be automatically generated and the user will be notified that they have completed this level of the game.

##Additional details of the game (in addition to the MVP): 
- The game will have several levels increasing in complexity as well as a difficulty level for the user to select before the user starts playing. 
- The levels of the the game will simply increase the size of the picture by adding a more tiles to the game, therefore making it more difficult to complete. 
- The difficulty level selected at the start of the game will set the amount of time that the user has to solve the puzzle. As the time runs down the picture will become darker and therefore more difficult to complete. At the point where the tiles are all completely black it will obviously be impossible to complete and the user will be told they haven't successfully completed that level and asked if they want to play again. 


##GUI/UXP(MVP):
- On the first page the user will be presented with a page displaying the name of game and explaining the rules, and if applicable, different levels and difficulty settings. 
 - When the user has chosen to start they will press a 'start' button they will be presented with the page containing the 'jumbled up' picutre. 
 - They will then be able to slide the tiles around in order to create a completed picture. 
 - On completing the picture they will be notified that they have completed the game. 


##GUI/UXP(in addition to MVP)
- On the section which explains the rules, an animation of game being played will be visible 
- There will be different levels increasing in complexity. Each new level will display a larger picture consisting of more tiles. 
- Before the user starts the game they will also be given a choice of difficulty levels. This will determine the amount of time they have to complete each level
- As the completion of the level is time contingent the user will also be given a 'start' button when they are presented with the jumbled picture which will begin the count down. 
- if the player successfully completes the game then they will be taken to the next level, if not, hey will be asked if they would like to play that level again. 




###Stuff to look at:
- jquerey ui sortable. 
- jq animation functions.
- temporary variable 
- .closest function
