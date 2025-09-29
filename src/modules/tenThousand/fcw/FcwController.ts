import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcws")
export default class FcwController {
  @operation({
    summary: "Get Fcws",
  })
  @get()
  static getFcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcw",
  })
  @post("{id}")
  static createFcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
