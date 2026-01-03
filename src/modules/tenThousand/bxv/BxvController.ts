import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxvs")
export default class BxvController {
  @operation({
    summary: "Get Bxvs",
  })
  @get()
  static getBxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxv",
  })
  @post("{id}")
  static createBxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
