import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxes")
export default class FxeController {
  @operation({
    summary: "Get Fxes",
  })
  @get()
  static getFxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxe",
  })
  @post("{id}")
  static createFxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
