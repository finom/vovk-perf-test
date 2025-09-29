import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccws")
export default class CcwController {
  @operation({
    summary: "Get Ccws",
  })
  @get()
  static getCcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccw",
  })
  @post("{id}")
  static createCcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
