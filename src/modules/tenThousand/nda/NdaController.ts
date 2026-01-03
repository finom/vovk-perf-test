import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndas")
export default class NdaController {
  @operation({
    summary: "Get Ndas",
  })
  @get()
  static getNdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nda",
  })
  @post("{id}")
  static createNda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
