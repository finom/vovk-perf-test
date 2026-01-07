import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwg")
export default class BwgController {
  @operation({
    summary: "Get Bwg",
  })
  @get()
  static getBwg = procedure({
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
