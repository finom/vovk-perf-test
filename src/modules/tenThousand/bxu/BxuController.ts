import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxus")
export default class BxuController {
  @operation({
    summary: "Get Bxus",
  })
  @get()
  static getBxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxu",
  })
  @post("{id}")
  static createBxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
