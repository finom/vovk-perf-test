import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dlas")
export default class DlaController {
  @operation({
    summary: "Get Dlas",
  })
  @get()
  static getDlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dla",
  })
  @post("{id}")
  static createDla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
