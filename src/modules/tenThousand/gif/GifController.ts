import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gif")
export default class GifController {
  @operation({
    summary: "Get Gif",
  })
  @get()
  static getGif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gif",
  })
  @post("{id}")
  static createGif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
