import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvls")
export default class BvlController {
  @operation({
    summary: "Get Bvls",
  })
  @get()
  static getBvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvl",
  })
  @post("{id}")
  static createBvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
