import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edas")
export default class EdaController {
  @operation({
    summary: "Get Edas",
  })
  @get()
  static getEdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eda",
  })
  @post("{id}")
  static createEda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
