import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gic")
export default class GicController {
  @operation({
    summary: "Get Gic",
  })
  @get()
  static getGic = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gic",
  })
  @post("{id}")
  static createGic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
