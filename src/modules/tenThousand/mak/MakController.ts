import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("maks")
export default class MakController {
  @operation({
    summary: "Get Maks",
  })
  @get()
  static getMaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mak",
  })
  @post("{id}")
  static createMak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
