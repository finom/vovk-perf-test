import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btbs")
export default class BtbController {
  @operation({
    summary: "Get Btbs",
  })
  @get()
  static getBtbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btb",
  })
  @post("{id}")
  static createBtb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
