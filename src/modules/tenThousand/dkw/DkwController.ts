import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkws")
export default class DkwController {
  @operation({
    summary: "Get Dkws",
  })
  @get()
  static getDkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkw",
  })
  @post("{id}")
  static createDkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
