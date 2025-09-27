# Project Demo Videos

This folder contains demo videos for your portfolio projects.

## How to add videos:

1. **Video Format**: Use MP4 format for best compatibility
2. **Video Size**: Recommended 16:9 aspect ratio (e.g., 1920x1080 or 1280x720)
3. **File Size**: Keep videos under 10MB for better loading performance
4. **Naming**: Use descriptive names like `ai-expense-tracker-demo.mp4`

## Example file structure:
```
public/videos/
├── ai-expense-tracker-demo.mp4
├── group-study-platform-demo.mp4
└── food-ordering-system-demo.mp4
```

## How to update the Projects component:

1. Add your video files to this folder
2. Update the `video` property in the projects array in `src/components/Projects.tsx`
3. Example:
   ```javascript
   {
     title: "AI Expense Tracker",
     // ... other properties
     video: "/videos/ai-expense-tracker-demo.mp4"
   }
   ```

## Video Optimization Tips:

- **Compress videos**: Use tools like HandBrake or online compressors
- **Short duration**: Keep demo videos under 30 seconds
- **Auto-play**: Videos will auto-play on hover and pause when not hovered
- **Mobile friendly**: Videos are responsive and work on all devices

## Creating Impactful Demo Videos:

### **Video Structure (30 seconds max):**
1. **Hook (0-5s)**: Show the main problem or current state
2. **Solution (5-15s)**: Demonstrate your key features
3. **Results (15-25s)**: Show the impact/outcome
4. **Call-to-action (25-30s)**: Brief project summary

### **Key Points to Include:**
- **Main Problem**: What issue does your project solve?
- **Key Features**: Show 2-3 most important features
- **User Experience**: Demonstrate the user flow
- **Results**: Show data, analytics, or success metrics
- **Impact**: Highlight the achievement or outcome

### **Video Content Guidelines:**
- **Start with impact**: Show the most impressive feature first
- **Keep it focused**: One main concept per video
- **Show, don't tell**: Demonstrate functionality, not just screenshots
- **Include metrics**: Show numbers, charts, or performance data
- **End with value**: Summarize the key benefit or achievement

## Fallback:

If no video is provided, the card will show a placeholder with the project icon and "Demo video coming soon" message.
