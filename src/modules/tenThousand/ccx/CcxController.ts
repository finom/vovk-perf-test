import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccxes")
export default class CcxController {
  @operation({
    summary: "Get Ccxes",
  })
  @get()
  static getCcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccx",
  })
  @post("{id}")
  static createCcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
