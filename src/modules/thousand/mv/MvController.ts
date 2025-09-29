import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvs")
export default class MvController {
  @operation({
    summary: "Get Mvs",
  })
  @get()
  static getMvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mv",
  })
  @post("{id}")
  static createMv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
