import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btjs")
export default class BtjController {
  @operation({
    summary: "Get Btjs",
  })
  @get()
  static getBtjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btj",
  })
  @post("{id}")
  static createBtj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
