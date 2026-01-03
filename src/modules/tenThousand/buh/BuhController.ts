import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buhs")
export default class BuhController {
  @operation({
    summary: "Get Buhs",
  })
  @get()
  static getBuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buh",
  })
  @post("{id}")
  static createBuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
