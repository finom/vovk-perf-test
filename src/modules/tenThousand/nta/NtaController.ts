import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntas")
export default class NtaController {
  @operation({
    summary: "Get Ntas",
  })
  @get()
  static getNtas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nta",
  })
  @post("{id}")
  static createNta = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
