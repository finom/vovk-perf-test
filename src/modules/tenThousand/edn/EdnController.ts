import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edn")
export default class EdnController {
  @operation({
    summary: "Get Edn",
  })
  @get()
  static getEdn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edn",
  })
  @post("{id}")
  static createEdn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
