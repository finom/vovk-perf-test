import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfus")
export default class GfuController {
  @operation({
    summary: "Get Gfus",
  })
  @get()
  static getGfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfu",
  })
  @post("{id}")
  static createGfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
