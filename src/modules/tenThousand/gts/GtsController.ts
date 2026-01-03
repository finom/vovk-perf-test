import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gts")
export default class GtsController {
  @operation({
    summary: "Get Gts",
  })
  @get()
  static getGts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gts",
  })
  @post("{id}")
  static createGts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
