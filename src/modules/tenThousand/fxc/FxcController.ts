import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxcs")
export default class FxcController {
  @operation({
    summary: "Get Fxcs",
  })
  @get()
  static getFxcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxc",
  })
  @post("{id}")
  static createFxc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
