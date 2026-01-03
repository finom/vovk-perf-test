import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exas")
export default class ExaController {
  @operation({
    summary: "Get Exas",
  })
  @get()
  static getExas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exa",
  })
  @post("{id}")
  static createExa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
