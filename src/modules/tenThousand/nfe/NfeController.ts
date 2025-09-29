import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfes")
export default class NfeController {
  @operation({
    summary: "Get Nfes",
  })
  @get()
  static getNfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfe",
  })
  @post("{id}")
  static createNfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
