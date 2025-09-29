import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csjs")
export default class CsjController {
  @operation({
    summary: "Get Csjs",
  })
  @get()
  static getCsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csj",
  })
  @post("{id}")
  static createCsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
