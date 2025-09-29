import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mezs")
export default class MezController {
  @operation({
    summary: "Get Mezs",
  })
  @get()
  static getMezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mez",
  })
  @post("{id}")
  static createMez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
