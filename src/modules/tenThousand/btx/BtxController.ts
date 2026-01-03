import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btxes")
export default class BtxController {
  @operation({
    summary: "Get Btxes",
  })
  @get()
  static getBtxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btx",
  })
  @post("{id}")
  static createBtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
