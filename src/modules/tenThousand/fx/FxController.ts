import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxes")
export default class FxController {
  @operation({
    summary: "Get Fxes",
  })
  @get()
  static getFxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fx",
  })
  @post("{id}")
  static createFx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
