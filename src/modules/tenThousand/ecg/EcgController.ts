import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecgs")
export default class EcgController {
  @operation({
    summary: "Get Ecgs",
  })
  @get()
  static getEcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecg",
  })
  @post("{id}")
  static createEcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
