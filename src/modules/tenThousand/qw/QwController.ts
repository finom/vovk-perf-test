import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qws")
export default class QwController {
  @operation({
    summary: "Get Qws",
  })
  @get()
  static getQws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qw",
  })
  @post("{id}")
  static createQw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
