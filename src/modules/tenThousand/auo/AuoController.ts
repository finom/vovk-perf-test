import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auos")
export default class AuoController {
  @operation({
    summary: "Get Auos",
  })
  @get()
  static getAuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auo",
  })
  @post("{id}")
  static createAuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
