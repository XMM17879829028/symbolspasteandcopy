# Symbols Copy & Paste Website

A website for copying and pasting various symbols, including common symbols, Egyptian symbols, and Lenny Face emoticons.

> Note: This website's interface is in English only.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router

## Development Guide

### Project Structure

```
src/
├── components/        # UI components
├── data/             # Data files and fallback data
├── hooks/            # Custom React hooks
public/
└── data/             # JSON data files
```

## How to Add New Symbols (While Maintaining Existing Layout and Functionality)

### Method 1: Add to Existing Category (Recommended)

1. **Modify JSON Data File**:

   Find the corresponding page's JSON file:
   - `public/data/common-symbols.json` - Common symbols
   - `public/data/egypt-symbols.json` - Egyptian symbols
   - `public/data/lenny-symbols.json` - Lenny Face emoticons
   - `public/data/art-symbols.json` - Symbol art

   Find the appropriate category and add new symbols to the `items` array:

   ```json
   {
     "category": "Emoticons",
     "items": [
       "ฅ^•ﻌ•^ฅ",
       "(◕ᴥ◕)",
       "new_symbol1",  // Add new symbol
       "new_symbol2"   // Add new symbol
     ]
   }
   ```

2. **Update Fallback Data**:

   Modify the `src/data/fallbackSymbols.ts` file, find the corresponding array, and add the same symbols:
   
   ```typescript
   export const artSymbols = [
     {
       category: "Emoticons",
       items: [
         "ฅ^•ﻌ•^ฅ",
         "(◕ᴥ◕)",
         "new_symbol1",  // Add new symbol
         "new_symbol2"   // Add new symbol
       ]
     }
   ];
   ```

### Method 2: Add New Category

1. **Modify JSON Data File**:

   Add a new category object to the corresponding page's JSON file:

   ```json
   [
     // Existing categories...
     {
       "category": "New Category Name",
       "items": [
         "symbol1", 
         "symbol2", 
         "symbol3"
       ]
     }
   ]
   ```

2. **Update Fallback Data**:

   Add the same new category to the corresponding array in `src/data/fallbackSymbols.ts`:
   
   ```typescript
   export const commonSymbols = [
     // Existing categories...
     {
       category: "New Category Name",
       items: [
         "symbol1", 
         "symbol2", 
         "symbol3"
       ]
     }
   ];
   ```

### Method 3: Add Multi-line ASCII Art

For multi-line ASCII art (like hearts, small houses, etc.):

1. Join each line with `\n`, for example:

   ```json
   {
     "category": "Heart",
     "items": [
       "Line1\nLine2\nLine3\nLine4"
     ]
   }
   ```

2. Large ASCII art will automatically be displayed with a special layout

### Method 4: Add New Page (New Symbol Type)

1. **Create New JSON Data File**:

   Create a new file in `public/data/` directory, e.g., `new-symbols.json`:
   
   ```json
   [
     {
       "category": "Category Name",
       "items": ["symbol1", "symbol2", "symbol3"]
     }
   ]
   ```

2. **Add Fallback Data**:

   Add a new array to `src/data/fallbackSymbols.ts`:
   
   ```typescript
   export const newSymbols = [
     {
       category: "Category Name",
       items: ["symbol1", "symbol2", "symbol3"]
     }
   ];
   ```

3. **Update Symbol Exports**:

   Modify `src/data/symbols.ts` file:
   
   ```typescript
   import { commonSymbols, egyptSymbols, lennySymbols, artSymbols, newSymbols } from './fallbackSymbols';
   
   export { commonSymbols, egyptSymbols, lennySymbols, artSymbols, newSymbols };
   ```

4. **Update Symbol Configuration**:

   Modify the configuration in `src/hooks/useSymbols.ts`:
   
   ```typescript
   export const symbolsConfig: SymbolsData = {
     // Existing config...
     new: {
       path: '/data/new-symbols.json',
       name: 'New Symbol Type'
     }
   };
   ```

5. **Add Page Component**:

   Modify `src/App.tsx`:
   
   ```typescript
   // Add new page component
   function NewSymbolsPage() {
     const { symbols, loading, error } = useSymbols('new');
     
     if (error) {
       console.error('Failed to load new symbols:', error);
     }
   
     return <SymbolsPage symbols={symbols} />;
   }
   
   // Add to routing
   <Route path="new" element={
     <Suspense fallback={<LoadingIndicator />}>
       <NewSymbolsPage />
     </Suspense>
   } />
   ```

6. **Add Navigation Link**:

   Modify `src/components/Layout.tsx`:
   
   ```tsx
   <Link 
     to="/new" 
     className="text-[#F4963F] hover:text-[#E3852E] transition-colors font-medium"
   >
     New Symbol Type
   </Link>
   ```

## Special Type Symbols Handling

- **Single Line Symbols**: Normal addition, will automatically adapt to size
- **Multi-line Symbols (With Newline `\n`)**: Will use special layout and style
- **Large ASCII Art**: Will use a more relaxed layout, automatically adapt

## Running Project

```bash
# Install dependencies
npm install

# Development mode run
npm run dev

# Build production version
npm run build
```