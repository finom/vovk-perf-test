import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpzs")
export default class MpzController {
  @operation({
    summary: "Get Mpzs",
  })
  @get()
  static getMpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpz",
  })
  @post("{id}")
  static createMpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
