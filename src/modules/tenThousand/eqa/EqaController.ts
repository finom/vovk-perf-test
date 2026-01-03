import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqas")
export default class EqaController {
  @operation({
    summary: "Get Eqas",
  })
  @get()
  static getEqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqa",
  })
  @post("{id}")
  static createEqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
