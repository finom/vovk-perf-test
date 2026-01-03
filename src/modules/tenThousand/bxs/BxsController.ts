import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxs")
export default class BxsController {
  @operation({
    summary: "Get Bxs",
  })
  @get()
  static getBxs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxs",
  })
  @post("{id}")
  static createBxs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
