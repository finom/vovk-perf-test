import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efxes")
export default class EfxController {
  @operation({
    summary: "Get Efxes",
  })
  @get()
  static getEfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efx",
  })
  @post("{id}")
  static createEfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
