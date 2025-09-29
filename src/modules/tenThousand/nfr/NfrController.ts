import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfrs")
export default class NfrController {
  @operation({
    summary: "Get Nfrs",
  })
  @get()
  static getNfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfr",
  })
  @post("{id}")
  static createNfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
