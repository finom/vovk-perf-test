import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arts")
export default class ArtController {
  @operation({
    summary: "Get Arts",
  })
  @get()
  static getArts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Art",
  })
  @post("{id}")
  static createArt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
