import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezas")
export default class EzaController {
  @operation({
    summary: "Get Ezas",
  })
  @get()
  static getEzas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eza",
  })
  @post("{id}")
  static createEza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
