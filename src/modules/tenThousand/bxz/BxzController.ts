import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxz")
export default class BxzController {
  @operation({
    summary: "Get Bxz",
  })
  @get()
  static getBxz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxz",
  })
  @post("{id}")
  static createBxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
