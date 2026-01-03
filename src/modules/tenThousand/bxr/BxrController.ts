import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxrs")
export default class BxrController {
  @operation({
    summary: "Get Bxrs",
  })
  @get()
  static getBxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxr",
  })
  @post("{id}")
  static createBxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
