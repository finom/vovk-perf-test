import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksg")
export default class KsgController {
  @operation({
    summary: "Get Ksg",
  })
  @get()
  static getKsg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksg",
  })
  @post("{id}")
  static createKsg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
