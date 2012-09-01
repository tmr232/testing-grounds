# This file is a test in blur-detection using PIL

# For javascript - http://www.html5rocks.com/en/tutorials/canvas/imagefilters/

import Image
import ImageFilter

class DetectBlur(ImageFilter.BuiltinFilter):
    name = "Detect Blur"
    filterargs = (3, 3), 1, 0, (
		 -1, -1, -1,
		 -1,  8, -1,
		 -1, -1, -1
		 )
         
class DetectBlur2(ImageFilter.BuiltinFilter):
    name = "Detect Blur"
    filterargs = (5, 5), 1, 0, (
		 -1, -1, -1, -1, -1,
		 -1, -2, -2, -2, -1,
		 -1, -2, 32, -2, -1,
		 -1, -2, -2, -2, -1,
		 -1, -1, -1, -1, -1,
		 )
         
class DetectBlur3(ImageFilter.BuiltinFilter):
    name = "Detect Blur"
    filterargs = (5, 5), 1, 0, (
		 -1, -1, -1, -1, -1,
		 -1, -2,  3, -2, -1,
		 -1,  3, 12,  3, -1,
		 -1, -2,  3, -2, -1,
		 -1, -1, -1, -1, -1,
		 )