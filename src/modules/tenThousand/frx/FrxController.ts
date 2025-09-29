import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("frxes")
export default class FrxController {
  @operation({
    summary: "Get Frxes",
  })
  @get()
  static getFrxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Frx",
  })
  @post("{id}")
  static createFrx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
