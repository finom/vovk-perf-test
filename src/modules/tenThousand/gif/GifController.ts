import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gifs")
export default class GifController {
  @operation({
    summary: "Get Gifs",
  })
  @get()
  static getGifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gif",
  })
  @post("{id}")
  static createGif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
