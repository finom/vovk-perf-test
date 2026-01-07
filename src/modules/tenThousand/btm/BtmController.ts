import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btm")
export default class BtmController {
  @operation({
    summary: "Get Btm",
  })
  @get()
  static getBtm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btm",
  })
  @post("{id}")
  static createBtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
