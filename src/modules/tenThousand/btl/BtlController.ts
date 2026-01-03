import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btls")
export default class BtlController {
  @operation({
    summary: "Get Btls",
  })
  @get()
  static getBtls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btl",
  })
  @post("{id}")
  static createBtl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
