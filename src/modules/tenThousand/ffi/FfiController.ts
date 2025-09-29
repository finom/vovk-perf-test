import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ffis")
export default class FfiController {
  @operation({
    summary: "Get Ffis",
  })
  @get()
  static getFfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ffi",
  })
  @post("{id}")
  static createFfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
