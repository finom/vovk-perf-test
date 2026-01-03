import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ras")
export default class RaController {
  @operation({
    summary: "Get Ras",
  })
  @get()
  static getRas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ra",
  })
  @post("{id}")
  static createRa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
