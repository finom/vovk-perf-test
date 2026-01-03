import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvbs")
export default class BvbController {
  @operation({
    summary: "Get Bvbs",
  })
  @get()
  static getBvbs = procedure({
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
