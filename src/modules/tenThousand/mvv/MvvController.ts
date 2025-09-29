import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvvs")
export default class MvvController {
  @operation({
    summary: "Get Mvvs",
  })
  @get()
  static getMvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvv",
  })
  @post("{id}")
  static createMvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
