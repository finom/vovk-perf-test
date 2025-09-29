import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntks")
export default class NtkController {
  @operation({
    summary: "Get Ntks",
  })
  @get()
  static getNtks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntk",
  })
  @post("{id}")
  static createNtk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
