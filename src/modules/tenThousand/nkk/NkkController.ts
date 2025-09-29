import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkks")
export default class NkkController {
  @operation({
    summary: "Get Nkks",
  })
  @get()
  static getNkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkk",
  })
  @post("{id}")
  static createNkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
