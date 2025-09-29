import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlns")
export default class NlnController {
  @operation({
    summary: "Get Nlns",
  })
  @get()
  static getNlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nln",
  })
  @post("{id}")
  static createNln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
