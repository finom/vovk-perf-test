import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkz")
export default class BkzController {
  @operation({
    summary: "Get Bkz",
  })
  @get()
  static getBkz = procedure({
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
