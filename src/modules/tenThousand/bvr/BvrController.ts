import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvr")
export default class BvrController {
  @operation({
    summary: "Get Bvr",
  })
  @get()
  static getBvr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvr",
  })
  @post("{id}")
  static createBvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
