import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctws")
export default class CtwController {
  @operation({
    summary: "Get Ctws",
  })
  @get()
  static getCtws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctw",
  })
  @post("{id}")
  static createCtw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
