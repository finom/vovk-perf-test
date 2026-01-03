import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acvs")
export default class AcvController {
  @operation({
    summary: "Get Acvs",
  })
  @get()
  static getAcvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Acv",
  })
  @post("{id}")
  static createAcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
