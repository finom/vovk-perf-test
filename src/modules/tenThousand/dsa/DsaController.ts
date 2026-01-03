import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsas")
export default class DsaController {
  @operation({
    summary: "Get Dsas",
  })
  @get()
  static getDsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsa",
  })
  @post("{id}")
  static createDsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
