import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxw")
export default class BxwController {
  @operation({
    summary: "Get Bxw",
  })
  @get()
  static getBxw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxw",
  })
  @post("{id}")
  static createBxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
