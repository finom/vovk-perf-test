import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ins")
export default class InsController {
  @operation({
    summary: "Get Ins",
  })
  @get()
  static getIns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ins",
  })
  @post("{id}")
  static createIns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
