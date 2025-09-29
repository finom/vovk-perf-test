import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flas")
export default class FlaController {
  @operation({
    summary: "Get Flas",
  })
  @get()
  static getFlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fla",
  })
  @post("{id}")
  static createFla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
