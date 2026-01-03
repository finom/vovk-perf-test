import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwgs")
export default class BwgController {
  @operation({
    summary: "Get Bwgs",
  })
  @get()
  static getBwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwg",
  })
  @post("{id}")
  static createBwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
