import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etas")
export default class EtaController {
  @operation({
    summary: "Get Etas",
  })
  @get()
  static getEtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eta",
  })
  @post("{id}")
  static createEta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
