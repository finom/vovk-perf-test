import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esies")
export default class EsyController {
  @operation({
    summary: "Get Esies",
  })
  @get()
  static getEsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esy",
  })
  @post("{id}")
  static createEsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
