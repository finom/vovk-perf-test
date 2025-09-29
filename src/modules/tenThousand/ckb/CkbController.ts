import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckbs")
export default class CkbController {
  @operation({
    summary: "Get Ckbs",
  })
  @get()
  static getCkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckb",
  })
  @post("{id}")
  static createCkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
