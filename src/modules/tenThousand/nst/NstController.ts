import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsts")
export default class NstController {
  @operation({
    summary: "Get Nsts",
  })
  @get()
  static getNsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nst",
  })
  @post("{id}")
  static createNst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
