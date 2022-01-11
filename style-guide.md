# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Soft Cyan (Full Slider Bar): hsl(174, 77%, 80%)
- Strong Cyan (Slider Backround): hsl(174, 86%, 45%)
- Light Grayish Red (Discount Background): hsl(14, 92%, 95%)
- Light Red (Discount Text): hsl(15, 100%, 70%)
- Pale Blue (CTA Text): hsl(226, 100%, 87%)

### Neutral

- White (Pricing Component Background): hsl (0, 0%, 100%)
- Very Pale Blue (Main Background): hsl(230, 100%, 99%)
- Light Grayish Blue (Empty Slider Bar): hsl(224, 65%, 95%)
- Light Grayish Blue (Toggle Background): hsl(223, 50%, 87%)
- Grayish Blue (Text): hsl(225, 20%, 60%)
- Dark Desaturated Blue (Text & CTA Background): hsl(227, 35%, 25%)

## Typography

### Body Copy

- Font size (Introductory Paragraph): 15px

### Font

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 600, 800



color-border-primary: #aaaaaa;
color-border-secondary: #cccccc;color-button-primary: #555555;
color-button-secondary: #dddddd;
/* ..or be more generic (recommended, if applicable) */color-ui-primary: #aaaaaa;
color-ui-secondary: #cccccc;

/* Base Colors */color-canvas:
color-canvas-inverted:color-brand-primary:
color-brand-secondary:
color-brand-tertiary:color-text-primary:
color-text-secondary:
color-text-inverted:
color-text-link:
color-text-ok:
color-text-warn:
color-text-danger:color-ui-primary:
color-ui-secondary:
color-ui-tertiary:
color-ui-ok:
color-ui-warn:
color-ui-danger:


css-tricks

$orange: #F060D6;
$red: #BB532E;
$blue: #4C9FEB;

$gray-1: #eee;
$gray-2: #ccc;
$gray-3: #555;

--------------------

$color-primary:
$color-primary-dark:
$color-primary-light: 

=========================================================

Slider input

Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the attributes below.
•	max - specifies the maximum value allowed
•	min - specifies the minimum value allowed
•	step - specifies the legal number intervals
•	value - Specifies the default value

Use the slider and toggle to see prices for different page view numbers (details provided below)

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.


We can set it up with 5 values (five positoins on slider)
1
2
3
4
5

min 1
max 5
step 1
value 3