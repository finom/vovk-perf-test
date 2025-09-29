import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isrs")
export default class IsrController {
  @operation({
    summary: "Get Isrs",
  })
  @get()
  static getIsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isr",
  })
  @post("{id}")
  static createIsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
