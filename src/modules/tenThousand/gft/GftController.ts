import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfts")
export default class GftController {
  @operation({
    summary: "Get Gfts",
  })
  @get()
  static getGfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gft",
  })
  @post("{id}")
  static createGft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
