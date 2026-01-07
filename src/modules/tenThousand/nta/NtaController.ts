import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nta")
export default class NtaController {
  @operation({
    summary: "Get Nta",
  })
  @get()
  static getNta = procedure({
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
