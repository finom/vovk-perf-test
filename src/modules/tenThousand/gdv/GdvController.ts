import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdv")
export default class GdvController {
  @operation({
    summary: "Get Gdv",
  })
  @get()
  static getGdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdv",
  })
  @post("{id}")
  static createGdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
