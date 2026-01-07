import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btb")
export default class BtbController {
  @operation({
    summary: "Get Btb",
  })
  @get()
  static getBtb = procedure({
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
