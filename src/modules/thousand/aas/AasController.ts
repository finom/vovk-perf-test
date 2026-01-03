import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aas")
export default class AasController {
  @operation({
    summary: "Get Aas",
  })
  @get()
  static getAas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aas",
  })
  @post("{id}")
  static createAas = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
