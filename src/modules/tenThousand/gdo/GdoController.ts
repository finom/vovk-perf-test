import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdo")
export default class GdoController {
  @operation({
    summary: "Get Gdo",
  })
  @get()
  static getGdo = procedure({
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
