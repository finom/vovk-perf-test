import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckzs")
export default class CkzController {
  @operation({
    summary: "Get Ckzs",
  })
  @get()
  static getCkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckz",
  })
  @post("{id}")
  static createCkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
