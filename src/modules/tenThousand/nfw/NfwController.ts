import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfws")
export default class NfwController {
  @operation({
    summary: "Get Nfws",
  })
  @get()
  static getNfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfw",
  })
  @post("{id}")
  static createNfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
