import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdjs")
export default class CdjController {
  @operation({
    summary: "Get Cdjs",
  })
  @get()
  static getCdjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdj",
  })
  @post("{id}")
  static createCdj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
