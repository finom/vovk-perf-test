import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvrs")
export default class BvrController {
  @operation({
    summary: "Get Bvrs",
  })
  @get()
  static getBvrs = procedure({
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
