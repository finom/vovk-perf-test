import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ado")
export default class AdoController {
  @operation({
    summary: "Get Ado",
  })
  @get()
  static getAdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ado",
  })
  @post("{id}")
  static createAdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
