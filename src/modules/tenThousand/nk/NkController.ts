import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nks")
export default class NkController {
  @operation({
    summary: "Get Nks",
  })
  @get()
  static getNks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nk",
  })
  @post("{id}")
  static createNk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
