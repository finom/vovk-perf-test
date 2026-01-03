import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efas")
export default class EfaController {
  @operation({
    summary: "Get Efas",
  })
  @get()
  static getEfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efa",
  })
  @post("{id}")
  static createEfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
