// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020301010101010201010101010102020201010101010102010101010101010202010101020202020101010101010102020101010101010101010101010101020201010101010101010102020201010202010101010101010101020101010102020101010201010101010201010101020201010102010101010102010101010202010101020202020202020202010102020101010201010101010201010101020201010102010101010102010101010202010101020101010101020101010102020101010101010101010101010101020202010101010101010101010101010202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . 2 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . 2 2 2 . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . 2 . . . . . 2 . . . . 2 
2 . . . 2 . . . . . 2 . . . . 2 
2 . . . 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . 2 . . . . . 2 . . . . 2 
2 . . . 2 . . . . . 2 . . . . 2 
2 . . . 2 . . . . . 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
