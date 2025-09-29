import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvws")
export default class MvwController {
  @operation({
    summary: "Get Mvws",
  })
  @get()
  static getMvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvw",
  })
  @post("{id}")
  static createMvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
