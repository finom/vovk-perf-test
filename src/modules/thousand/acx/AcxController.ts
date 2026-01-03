import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acxes")
export default class AcxController {
  @operation({
    summary: "Get Acxes",
  })
  @get()
  static getAcxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acx",
  })
  @post("{id}")
  static createAcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
