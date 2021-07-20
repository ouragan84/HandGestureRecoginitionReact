// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const loveYouGesture = new GestureDescription('love_you');

// Thumb 
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 25)
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 10);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 25)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 10);

for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, 10); 
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 5);
}




// Define Gesture Description
export const thumbsDownGesture1 = new GestureDescription('thumbs_down');

// Thumb
thumbsDownGesture1.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
thumbsDownGesture1.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 40);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Index, Finger.Middle]) {
    thumbsDownGesture1.addCurl(finger, FingerCurl.FullCurl, 10);
}


// Define Gesture Description
export const thumbsDownGesture2 = new GestureDescription('thumbs_down');

// Thumb
thumbsDownGesture2.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
thumbsDownGesture2.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 40);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Index, Finger.Middle]) {
    thumbsDownGesture2.addCurl(finger, FingerCurl.FullCurl, 10);
}


// Define Gesture Description
export const thumbsDownGesture3 = new GestureDescription('thumbs_down');

// Thumb
thumbsDownGesture3.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
thumbsDownGesture3.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 40);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Index, Finger.Middle]) {
    thumbsDownGesture3.addCurl(finger, FingerCurl.FullCurl, 10);
}




// Define Gesture Description
export const thumbsUpGesture1 = new GestureDescription('thumbs_up');

// Thumb
thumbsUpGesture1.addCurl(Finger.Thumb, FingerCurl.NoCurl, 25)
thumbsUpGesture1.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 35);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Index, Finger.Middle]) {
    thumbsUpGesture1.addCurl(finger, FingerCurl.FullCurl, 10);
}



// Define Gesture Description
export const thumbsUpGesture2 = new GestureDescription('thumbs_up');

// Thumb
thumbsUpGesture2.addCurl(Finger.Thumb, FingerCurl.NoCurl, 25)
thumbsUpGesture2.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 35);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Index, Finger.Middle]) {
    thumbsUpGesture2.addCurl(finger, FingerCurl.FullCurl, 10);
}



// Define Gesture Description
export const thumbsUpGesture3 = new GestureDescription('thumbs_up');

// Thumb
thumbsUpGesture3.addCurl(Finger.Thumb, FingerCurl.NoCurl, 25)
thumbsUpGesture3.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 35);

for (let finger of [Finger.Pinky, Finger.Ring, Finger.Index, Finger.Middle]) {
    thumbsUpGesture3.addCurl(finger, FingerCurl.FullCurl, 10);
}



// Define Gesture Description
export const victoryGesture = new GestureDescription('victory');

// Thumb 
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 10);

// Index
victoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 20)
victoryGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 10);

// Middle
victoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 20)
victoryGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 10);

for(let finger of [Finger.Pinky, Finger.Ring]){
    victoryGesture.addCurl(finger, FingerCurl.FullCurl, 10); 
    victoryGesture.addDirection(finger, FingerDirection.VerticalDown, 5);
}




// Define Gesture Description
export const raisedGesture = new GestureDescription('raised');

for(let finger of [Finger.Pinky, Finger.Ring, Finger.Middle, Finger.Index]){
    raisedGesture.addCurl(finger, FingerCurl.NoCurl, 15); 
    raisedGesture.addDirection(finger, FingerDirection.VerticalUp, 10);
}





// Define Gesture Description
export const phoneGesture1 = new GestureDescription('phone');

// Index
phoneGesture1.addCurl(Finger.Pinky, FingerCurl.NoCurl, 25)
phoneGesture1.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 15);

// Middle
phoneGesture1.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
phoneGesture1.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 10);


for(let finger of [Finger.Middle, Finger.Ring, Finger.Index]){
    phoneGesture1.addCurl(finger, FingerCurl.FullCurl, 10); 
}




// Define Gesture Description
export const phoneGesture2 = new GestureDescription('phone');

// Index
phoneGesture2.addCurl(Finger.Pinky, FingerCurl.NoCurl, 25)
phoneGesture2.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 15);

// Middle
phoneGesture2.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
phoneGesture2.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 10);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index]){
    phoneGesture2.addCurl(finger, FingerCurl.FullCurl, 10); 
}




// Define Gesture Description
export const phoneGesture3 = new GestureDescription('phone');

// Index
phoneGesture3.addCurl(Finger.Pinky, FingerCurl.NoCurl, 25)
phoneGesture3.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 15);

// Middle
phoneGesture3.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
phoneGesture3.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 10);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index]){
    phoneGesture3.addCurl(finger, FingerCurl.FullCurl, 10); 
}




// Define Gesture Description
export const phoneGesture4 = new GestureDescription('phone');

// Index
phoneGesture4.addCurl(Finger.Pinky, FingerCurl.NoCurl, 25)
phoneGesture4.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 15);

// Middle
phoneGesture4.addCurl(Finger.Thumb, FingerCurl.NoCurl, 20)
phoneGesture4.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 10);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Index]){
    phoneGesture4.addCurl(finger, FingerCurl.FullCurl, 10); 
}