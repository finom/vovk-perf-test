import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kras")
export default class KraController {
  @operation({
    summary: "Get Kras",
  })
  @get()
  static getKras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kra",
  })
  @post("{id}")
  static createKra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
