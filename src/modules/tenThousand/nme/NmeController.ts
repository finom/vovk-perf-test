import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmes")
export default class NmeController {
  @operation({
    summary: "Get Nmes",
  })
  @get()
  static getNmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nme",
  })
  @post("{id}")
  static createNme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
