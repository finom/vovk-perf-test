import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctqs")
export default class CtqController {
  @operation({
    summary: "Get Ctqs",
  })
  @get()
  static getCtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctq",
  })
  @post("{id}")
  static createCtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
