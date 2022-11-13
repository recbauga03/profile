
export const getPaletteColor = (backgroundImage: string | undefined) => {
    const img = new Image();

    if (!backgroundImage) return;

    img.src = backgroundImage;

    const imagePalette = require('image-palette-core');
    return imagePalette.getImagePalette(img);
}

export const getComplementaryColor = (color:string) => {
    var complementaryColors = require('complementary-colors');
    
    return new complementaryColors.complementaryColors(color).complementary()[0];
}