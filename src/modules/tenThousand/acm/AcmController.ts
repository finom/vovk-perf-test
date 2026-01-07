import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acm")
export default class AcmController {
  @operation({
    summary: "Get Acm",
  })
  @get()
  static getAcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acm",
  })
  @post("{id}")
  static createAcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
