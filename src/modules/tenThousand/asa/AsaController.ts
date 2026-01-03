import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asas")
export default class AsaController {
  @operation({
    summary: "Get Asas",
  })
  @get()
  static getAsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asa",
  })
  @post("{id}")
  static createAsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
