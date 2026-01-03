import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccfs")
export default class CcfController {
  @operation({
    summary: "Get Ccfs",
  })
  @get()
  static getCcfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccf",
  })
  @post("{id}")
  static createCcf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
