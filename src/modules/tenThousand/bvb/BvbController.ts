import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvb")
export default class BvbController {
  @operation({
    summary: "Get Bvb",
  })
  @get()
  static getBvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvb",
  })
  @post("{id}")
  static createBvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
