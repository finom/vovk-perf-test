import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edos")
export default class EdoController {
  @operation({
    summary: "Get Edos",
  })
  @get()
  static getEdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edo",
  })
  @post("{id}")
  static createEdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
