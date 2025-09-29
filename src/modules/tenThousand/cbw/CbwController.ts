import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbws")
export default class CbwController {
  @operation({
    summary: "Get Cbws",
  })
  @get()
  static getCbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbw",
  })
  @post("{id}")
  static createCbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
