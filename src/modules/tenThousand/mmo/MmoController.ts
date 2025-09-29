import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmos")
export default class MmoController {
  @operation({
    summary: "Get Mmos",
  })
  @get()
  static getMmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmo",
  })
  @post("{id}")
  static createMmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
