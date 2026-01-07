import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvh")
export default class BvhController {
  @operation({
    summary: "Get Bvh",
  })
  @get()
  static getBvh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvh",
  })
  @post("{id}")
  static createBvh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
