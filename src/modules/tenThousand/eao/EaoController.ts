import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaos")
export default class EaoController {
  @operation({
    summary: "Get Eaos",
  })
  @get()
  static getEaos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eao",
  })
  @post("{id}")
  static createEao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
