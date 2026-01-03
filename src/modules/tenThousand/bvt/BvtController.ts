import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvts")
export default class BvtController {
  @operation({
    summary: "Get Bvts",
  })
  @get()
  static getBvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvt",
  })
  @post("{id}")
  static createBvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
