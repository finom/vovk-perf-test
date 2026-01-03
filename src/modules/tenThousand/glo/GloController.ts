import { procedure, prefix, get, post, operation } from "vovk";

@prefix("glos")
export default class GloController {
  @operation({
    summary: "Get Glos",
  })
  @get()
  static getGlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Glo",
  })
  @post("{id}")
  static createGlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
