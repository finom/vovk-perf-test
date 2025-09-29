import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mvxes")
export default class MvxController {
  @operation({
    summary: "Get Mvxes",
  })
  @get()
  static getMvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mvx",
  })
  @post("{id}")
  static createMvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
