import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxr")
export default class BxrController {
  @operation({
    summary: "Get Bxr",
  })
  @get()
  static getBxr = procedure({
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
