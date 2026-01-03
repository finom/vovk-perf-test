import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdos")
export default class GdoController {
  @operation({
    summary: "Get Gdos",
  })
  @get()
  static getGdos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdo",
  })
  @post("{id}")
  static createGdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
