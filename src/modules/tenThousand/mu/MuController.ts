import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mus")
export default class MuController {
  @operation({
    summary: "Get Mus",
  })
  @get()
  static getMus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mu",
  })
  @post("{id}")
  static createMu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
