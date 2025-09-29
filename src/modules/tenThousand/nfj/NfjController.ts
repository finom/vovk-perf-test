import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfjs")
export default class NfjController {
  @operation({
    summary: "Get Nfjs",
  })
  @get()
  static getNfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfj",
  })
  @post("{id}")
  static createNfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
