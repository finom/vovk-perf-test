import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfts")
export default class HftController {
  @operation({
    summary: "Get Hfts",
  })
  @get()
  static getHfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hft",
  })
  @post("{id}")
  static createHft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
