import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwks")
export default class BwkController {
  @operation({
    summary: "Get Bwks",
  })
  @get()
  static getBwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwk",
  })
  @post("{id}")
  static createBwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
