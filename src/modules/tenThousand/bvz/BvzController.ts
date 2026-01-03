import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvzs")
export default class BvzController {
  @operation({
    summary: "Get Bvzs",
  })
  @get()
  static getBvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvz",
  })
  @post("{id}")
  static createBvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
