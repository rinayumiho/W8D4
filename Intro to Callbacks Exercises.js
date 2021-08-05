// Use setInterval to build a small clock in your terminal. It should display the current time every second. However, you can only query the system time once. Your clock must store that time, increment it, and display it in HH:MM:SS (use 24hr format).

// Make a Clock class. Calling new Date() will give us an object that represents the current system time. Because you can only do this once, do it in your Clock constructor. Don't bother keeping this Date object around because you won't need it anymore. Just store the hours, minutes, and seconds. Look at the Date docs for help here.

// You'll also need to schedule a Clock.prototype._tick callback that updates the time and calls the printTime method. Don't worry about padding zeroes in the format. Just focus on the basic logic and functionality.
class Clock {
    constructor() {
      // 1. Create a Date object.
      let time = new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = time.getHours();
      this.minutes = time.getMinutes();
      this.seconds = time.getSeconds();
      // 3. Call printTime.
   
      // 4. Schedule the tick at 1 second intervals.
    //   this.time = new Date()_this
    //   setInterval(function(){ alert("Hello"); }, 1000);
    // setInterval(function(){this._tick()},1000)
    this.interval = setInterval(this._tick.bind(this),1000);

    }

    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      let s = this.seconds.toString();
      if (s.length === 1){
          s = "0"+s;
      }
       console.log(`${this.hours}:${this.minutes}:${s}`);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      ++this.seconds;
    if (this.seconds === 60){
        this.seconds = 0;
        ++this.minutes;
    }
    if (this.minutes === 60){
        this.minutes = 0;
        ++this.hours;
    }
    if (this.hours === 24){
        this.hours = 0;       
    }
      
    }
  }
  
  const clock = new Clock();

clock.printTime();
setInterval(function(){clock.printTime()},1000);
// setTimeout(function(){clock.printTime()},2000);
// setTimeout(function(){clock.printTime()},3000);
// setTimeout(function(){clock.printTime()},4000);
// setTimeout(function(){clock.printTime()},5000);
// setTimeout(function(){clock.printTime()},6000);

