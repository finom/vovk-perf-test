import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btx")
export default class BtxController {
  @operation({
    summary: "Get Btx",
  })
  @get()
  static getBtx = procedure({
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
