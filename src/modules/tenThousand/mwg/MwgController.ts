import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwgs")
export default class MwgController {
  @operation({
    summary: "Get Mwgs",
  })
  @get()
  static getMwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwg",
  })
  @post("{id}")
  static createMwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
