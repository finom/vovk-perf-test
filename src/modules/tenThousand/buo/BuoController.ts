import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buos")
export default class BuoController {
  @operation({
    summary: "Get Buos",
  })
  @get()
  static getBuos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buo",
  })
  @post("{id}")
  static createBuo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
