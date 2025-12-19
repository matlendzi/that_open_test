export interface TilesetManager {
  addTileset: (url: string) => Promise<void>;
}

let tilesetManager: TilesetManager | null = null;

export const registerTilesetManager = (manager: TilesetManager) => {
  tilesetManager = manager;
};

export const getTilesetManager = () => {
  if (!tilesetManager) {
    throw new Error("Tileset manager has not been registered yet.");
  }

  return tilesetManager;
};
