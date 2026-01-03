import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfvs")
export default class GfvController {
  @operation({
    summary: "Get Gfvs",
  })
  @get()
  static getGfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfv",
  })
  @post("{id}")
  static createGfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
