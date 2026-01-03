import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sas")
export default class SaController {
  @operation({
    summary: "Get Sas",
  })
  @get()
  static getSas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sa",
  })
  @post("{id}")
  static createSa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
