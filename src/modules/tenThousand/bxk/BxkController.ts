import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxks")
export default class BxkController {
  @operation({
    summary: "Get Bxks",
  })
  @get()
  static getBxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxk",
  })
  @post("{id}")
  static createBxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
