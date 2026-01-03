import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfts")
export default class JftController {
  @operation({
    summary: "Get Jfts",
  })
  @get()
  static getJfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jft",
  })
  @post("{id}")
  static createJft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
