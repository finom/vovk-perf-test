import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meqs")
export default class MeqController {
  @operation({
    summary: "Get Meqs",
  })
  @get()
  static getMeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Meq",
  })
  @post("{id}")
  static createMeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
