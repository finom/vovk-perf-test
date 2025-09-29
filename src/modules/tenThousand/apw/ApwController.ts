import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apws")
export default class ApwController {
  @operation({
    summary: "Get Apws",
  })
  @get()
  static getApws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apw",
  })
  @post("{id}")
  static createApw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
