import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxd")
export default class BxdController {
  @operation({
    summary: "Get Bxd",
  })
  @get()
  static getBxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxd",
  })
  @post("{id}")
  static createBxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
