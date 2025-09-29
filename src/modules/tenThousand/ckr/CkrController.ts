import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckrs")
export default class CkrController {
  @operation({
    summary: "Get Ckrs",
  })
  @get()
  static getCkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckr",
  })
  @post("{id}")
  static createCkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
