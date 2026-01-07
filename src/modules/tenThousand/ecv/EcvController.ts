import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecv")
export default class EcvController {
  @operation({
    summary: "Get Ecv",
  })
  @get()
  static getEcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecv",
  })
  @post("{id}")
  static createEcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
