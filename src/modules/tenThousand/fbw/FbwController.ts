import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fbws")
export default class FbwController {
  @operation({
    summary: "Get Fbws",
  })
  @get()
  static getFbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fbw",
  })
  @post("{id}")
  static createFbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
