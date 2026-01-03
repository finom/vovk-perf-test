import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euos")
export default class EuoController {
  @operation({
    summary: "Get Euos",
  })
  @get()
  static getEuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euo",
  })
  @post("{id}")
  static createEuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
