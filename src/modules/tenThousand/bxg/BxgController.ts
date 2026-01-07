import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxg")
export default class BxgController {
  @operation({
    summary: "Get Bxg",
  })
  @get()
  static getBxg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxg",
  })
  @post("{id}")
  static createBxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
