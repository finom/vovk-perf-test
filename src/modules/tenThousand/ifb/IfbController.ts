import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifbs")
export default class IfbController {
  @operation({
    summary: "Get Ifbs",
  })
  @get()
  static getIfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifb",
  })
  @post("{id}")
  static createIfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
