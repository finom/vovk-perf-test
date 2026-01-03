import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npas")
export default class NpaController {
  @operation({
    summary: "Get Npas",
  })
  @get()
  static getNpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Npa",
  })
  @post("{id}")
  static createNpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
