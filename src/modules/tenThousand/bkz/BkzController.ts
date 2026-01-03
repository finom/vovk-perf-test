import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkzs")
export default class BkzController {
  @operation({
    summary: "Get Bkzs",
  })
  @get()
  static getBkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkz",
  })
  @post("{id}")
  static createBkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
