import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfs")
export default class NfController {
  @operation({
    summary: "Get Nfs",
  })
  @get()
  static getNfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nf",
  })
  @post("{id}")
  static createNf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
