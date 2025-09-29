import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckws")
export default class CkwController {
  @operation({
    summary: "Get Ckws",
  })
  @get()
  static getCkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckw",
  })
  @post("{id}")
  static createCkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
