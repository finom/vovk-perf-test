import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arrs")
export default class ArrController {
  @operation({
    summary: "Get Arrs",
  })
  @get()
  static getArrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arr",
  })
  @post("{id}")
  static createArr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
