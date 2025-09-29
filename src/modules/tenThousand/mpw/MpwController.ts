import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpws")
export default class MpwController {
  @operation({
    summary: "Get Mpws",
  })
  @get()
  static getMpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpw",
  })
  @post("{id}")
  static createMpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
