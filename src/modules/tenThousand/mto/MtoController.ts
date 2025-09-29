import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtos")
export default class MtoController {
  @operation({
    summary: "Get Mtos",
  })
  @get()
  static getMtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mto",
  })
  @post("{id}")
  static createMto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
