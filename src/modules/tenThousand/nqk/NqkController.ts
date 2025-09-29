import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqks")
export default class NqkController {
  @operation({
    summary: "Get Nqks",
  })
  @get()
  static getNqks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqk",
  })
  @post("{id}")
  static createNqk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
