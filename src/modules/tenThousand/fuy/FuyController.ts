import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuys")
export default class FuyController {
  @operation({
    summary: "Get Fuys",
  })
  @get()
  static getFuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuy",
  })
  @post("{id}")
  static createFuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
