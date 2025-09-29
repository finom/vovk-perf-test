import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foms")
export default class FomController {
  @operation({
    summary: "Get Foms",
  })
  @get()
  static getFoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fom",
  })
  @post("{id}")
  static createFom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
