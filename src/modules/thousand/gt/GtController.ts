import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gts")
export default class GtController {
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
    summary: "Create Gt",
  })
  @post("{id}")
  static createGt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
