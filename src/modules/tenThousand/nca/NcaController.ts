import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncas")
export default class NcaController {
  @operation({
    summary: "Get Ncas",
  })
  @get()
  static getNcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nca",
  })
  @post("{id}")
  static createNca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
