import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvl")
export default class BvlController {
  @operation({
    summary: "Get Bvl",
  })
  @get()
  static getBvl = procedure({
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
