import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccx")
export default class CcxController {
  @operation({
    summary: "Get Ccx",
  })
  @get()
  static getCcx = procedure({
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
