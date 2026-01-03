import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqos")
export default class NqoController {
  @operation({
    summary: "Get Nqos",
  })
  @get()
  static getNqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nqo",
  })
  @post("{id}")
  static createNqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
