import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyms")
export default class DymController {
  @operation({
    summary: "Get Dyms",
  })
  @get()
  static getDyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dym",
  })
  @post("{id}")
  static createDym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
