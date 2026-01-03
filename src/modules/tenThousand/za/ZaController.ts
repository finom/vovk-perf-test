import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zas")
export default class ZaController {
  @operation({
    summary: "Get Zas",
  })
  @get()
  static getZas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Za",
  })
  @post("{id}")
  static createZa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
