# Benchmarking Example Animations

Writing the same easy sample animation in SMIL, Canvas, CSS, and Velocity for benchmarking purposes.

## Benchmarking Tips

* Completely shut down and kill all other processes before and between benchmarks
* Host the files locally and use an incognito window
* Clear the cache
* System must be plugged in, not on battery power.
* Use consistent timeframes for each
* Use shorter intervals and very long intervals.
* In chrome dev tools, open the rendering tab and in settings, check the show paint rectangles, show composited layer borders, and show FPS meter to debug janking
* In timeline, look at the frames and open each process to find out what's slowing things down. Pay particular attention to 'painting'.