import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfas")
export default class KfaController {
  @operation({
    summary: "Get Kfas",
  })
  @get()
  static getKfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfa",
  })
  @post("{id}")
  static createKfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
