import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckhs")
export default class CkhController {
  @operation({
    summary: "Get Ckhs",
  })
  @get()
  static getCkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckh",
  })
  @post("{id}")
  static createCkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
