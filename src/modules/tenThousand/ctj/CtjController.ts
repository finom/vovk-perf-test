import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctjs")
export default class CtjController {
  @operation({
    summary: "Get Ctjs",
  })
  @get()
  static getCtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctj",
  })
  @post("{id}")
  static createCtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
