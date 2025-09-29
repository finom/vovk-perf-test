import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clrs")
export default class ClrController {
  @operation({
    summary: "Get Clrs",
  })
  @get()
  static getClrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clr",
  })
  @post("{id}")
  static createClr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
