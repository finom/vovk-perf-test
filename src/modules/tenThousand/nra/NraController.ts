import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nras")
export default class NraController {
  @operation({
    summary: "Get Nras",
  })
  @get()
  static getNras = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nra",
  })
  @post("{id}")
  static createNra = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
