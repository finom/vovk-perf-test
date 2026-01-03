import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvvs")
export default class BvvController {
  @operation({
    summary: "Get Bvvs",
  })
  @get()
  static getBvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvv",
  })
  @post("{id}")
  static createBvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
