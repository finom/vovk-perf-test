import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bv")
export default class BvController {
  @operation({
    summary: "Get Bv",
  })
  @get()
  static getBv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bv",
  })
  @post("{id}")
  static createBv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
