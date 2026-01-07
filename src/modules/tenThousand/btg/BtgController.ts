import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btg")
export default class BtgController {
  @operation({
    summary: "Get Btg",
  })
  @get()
  static getBtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btg",
  })
  @post("{id}")
  static createBtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
