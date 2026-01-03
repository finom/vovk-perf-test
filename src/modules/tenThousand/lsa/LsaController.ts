import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsas")
export default class LsaController {
  @operation({
    summary: "Get Lsas",
  })
  @get()
  static getLsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsa",
  })
  @post("{id}")
  static createLsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
