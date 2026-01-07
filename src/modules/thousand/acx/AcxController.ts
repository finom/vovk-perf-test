import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acx")
export default class AcxController {
  @operation({
    summary: "Get Acx",
  })
  @get()
  static getAcx = procedure({
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
