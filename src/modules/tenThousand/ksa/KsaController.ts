import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksas")
export default class KsaController {
  @operation({
    summary: "Get Ksas",
  })
  @get()
  static getKsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksa",
  })
  @post("{id}")
  static createKsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
