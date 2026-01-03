import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btms")
export default class BtmController {
  @operation({
    summary: "Get Btms",
  })
  @get()
  static getBtms = procedure({
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
