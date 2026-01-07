import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acv")
export default class AcvController {
  @operation({
    summary: "Get Acv",
  })
  @get()
  static getAcv = procedure({
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
