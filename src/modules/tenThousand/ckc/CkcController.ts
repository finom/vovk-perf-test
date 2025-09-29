import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckcs")
export default class CkcController {
  @operation({
    summary: "Get Ckcs",
  })
  @get()
  static getCkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckc",
  })
  @post("{id}")
  static createCkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
