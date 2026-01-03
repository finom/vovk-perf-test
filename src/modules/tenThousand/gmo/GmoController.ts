import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmos")
export default class GmoController {
  @operation({
    summary: "Get Gmos",
  })
  @get()
  static getGmos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmo",
  })
  @post("{id}")
  static createGmo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
