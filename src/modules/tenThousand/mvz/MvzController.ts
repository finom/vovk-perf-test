import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvzs")
export default class MvzController {
  @operation({
    summary: "Get Mvzs",
  })
  @get()
  static getMvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvz",
  })
  @post("{id}")
  static createMvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
