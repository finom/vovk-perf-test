import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvls")
export default class MvlController {
  @operation({
    summary: "Get Mvls",
  })
  @get()
  static getMvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvl",
  })
  @post("{id}")
  static createMvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
