import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckqs")
export default class CkqController {
  @operation({
    summary: "Get Ckqs",
  })
  @get()
  static getCkqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckq",
  })
  @post("{id}")
  static createCkq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
