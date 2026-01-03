import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edns")
export default class EdnController {
  @operation({
    summary: "Get Edns",
  })
  @get()
  static getEdns = procedure({
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
