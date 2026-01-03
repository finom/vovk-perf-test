import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvxes")
export default class BvxController {
  @operation({
    summary: "Get Bvxes",
  })
  @get()
  static getBvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvx",
  })
  @post("{id}")
  static createBvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
