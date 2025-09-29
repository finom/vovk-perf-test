import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjks")
export default class FjkController {
  @operation({
    summary: "Get Fjks",
  })
  @get()
  static getFjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fjk",
  })
  @post("{id}")
  static createFjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
