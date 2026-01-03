import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfas")
export default class NfaController {
  @operation({
    summary: "Get Nfas",
  })
  @get()
  static getNfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfa",
  })
  @post("{id}")
  static createNfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
