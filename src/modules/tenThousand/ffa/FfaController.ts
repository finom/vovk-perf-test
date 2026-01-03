import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffas")
export default class FfaController {
  @operation({
    summary: "Get Ffas",
  })
  @get()
  static getFfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffa",
  })
  @post("{id}")
  static createFfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
