import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckxes")
export default class CkxController {
  @operation({
    summary: "Get Ckxes",
  })
  @get()
  static getCkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckx",
  })
  @post("{id}")
  static createCkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
