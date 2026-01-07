import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esw")
export default class EswController {
  @operation({
    summary: "Get Esw",
  })
  @get()
  static getEsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esw",
  })
  @post("{id}")
  static createEsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
