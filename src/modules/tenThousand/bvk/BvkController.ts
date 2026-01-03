import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvks")
export default class BvkController {
  @operation({
    summary: "Get Bvks",
  })
  @get()
  static getBvks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvk",
  })
  @post("{id}")
  static createBvk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
