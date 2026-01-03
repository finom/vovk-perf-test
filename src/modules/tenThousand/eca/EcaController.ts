import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecas")
export default class EcaController {
  @operation({
    summary: "Get Ecas",
  })
  @get()
  static getEcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eca",
  })
  @post("{id}")
  static createEca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
