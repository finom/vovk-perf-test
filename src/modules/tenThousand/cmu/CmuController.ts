import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmus")
export default class CmuController {
  @operation({
    summary: "Get Cmus",
  })
  @get()
  static getCmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmu",
  })
  @post("{id}")
  static createCmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
