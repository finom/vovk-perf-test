import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ubs")
export default class UbController {
  @operation({
    summary: "Get Ubs",
  })
  @get()
  static getUbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ub",
  })
  @post("{id}")
  static createUb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
