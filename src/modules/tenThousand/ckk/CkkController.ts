import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckks")
export default class CkkController {
  @operation({
    summary: "Get Ckks",
  })
  @get()
  static getCkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ckk",
  })
  @post("{id}")
  static createCkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
