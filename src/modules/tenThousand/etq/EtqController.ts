import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etqs")
export default class EtqController {
  @operation({
    summary: "Get Etqs",
  })
  @get()
  static getEtqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etq",
  })
  @post("{id}")
  static createEtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
