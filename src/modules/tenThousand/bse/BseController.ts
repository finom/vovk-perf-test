import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bses")
export default class BseController {
  @operation({
    summary: "Get Bses",
  })
  @get()
  static getBses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bse",
  })
  @post("{id}")
  static createBse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
