import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpqs")
export default class MpqController {
  @operation({
    summary: "Get Mpqs",
  })
  @get()
  static getMpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpq",
  })
  @post("{id}")
  static createMpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
