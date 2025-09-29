import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dads")
export default class DadController {
  @operation({
    summary: "Get Dads",
  })
  @get()
  static getDads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dad",
  })
  @post("{id}")
  static createDad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
