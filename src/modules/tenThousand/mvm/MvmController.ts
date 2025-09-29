import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvms")
export default class MvmController {
  @operation({
    summary: "Get Mvms",
  })
  @get()
  static getMvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvm",
  })
  @post("{id}")
  static createMvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
