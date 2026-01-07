import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxq")
export default class BxqController {
  @operation({
    summary: "Get Bxq",
  })
  @get()
  static getBxq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxq",
  })
  @post("{id}")
  static createBxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
