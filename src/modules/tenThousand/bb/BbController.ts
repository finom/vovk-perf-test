import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbs")
export default class BbController {
  @operation({
    summary: "Get Bbs",
  })
  @get()
  static getBbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bb",
  })
  @post("{id}")
  static createBb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
