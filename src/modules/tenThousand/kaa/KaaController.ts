import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaas")
export default class KaaController {
  @operation({
    summary: "Get Kaas",
  })
  @get()
  static getKaas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kaa",
  })
  @post("{id}")
  static createKaa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
