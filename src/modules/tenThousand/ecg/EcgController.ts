import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecg")
export default class EcgController {
  @operation({
    summary: "Get Ecg",
  })
  @get()
  static getEcg = procedure({
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
