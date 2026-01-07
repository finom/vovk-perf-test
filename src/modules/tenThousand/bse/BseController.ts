import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bse")
export default class BseController {
  @operation({
    summary: "Get Bse",
  })
  @get()
  static getBse = procedure({
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
