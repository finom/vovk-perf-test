import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckus")
export default class CkuController {
  @operation({
    summary: "Get Ckus",
  })
  @get()
  static getCkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cku",
  })
  @post("{id}")
  static createCku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
