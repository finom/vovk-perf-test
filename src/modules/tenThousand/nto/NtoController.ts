import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntos")
export default class NtoController {
  @operation({
    summary: "Get Ntos",
  })
  @get()
  static getNtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nto",
  })
  @post("{id}")
  static createNto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
