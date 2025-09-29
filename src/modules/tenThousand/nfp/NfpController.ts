import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfps")
export default class NfpController {
  @operation({
    summary: "Get Nfps",
  })
  @get()
  static getNfps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfp",
  })
  @post("{id}")
  static createNfp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
