import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bns")
export default class BnController {
  @operation({
    summary: "Get Bns",
  })
  @get()
  static getBns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bn",
  })
  @post("{id}")
  static createBn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
