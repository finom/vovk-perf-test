import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mphs")
export default class MphController {
  @operation({
    summary: "Get Mphs",
  })
  @get()
  static getMphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mph",
  })
  @post("{id}")
  static createMph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
