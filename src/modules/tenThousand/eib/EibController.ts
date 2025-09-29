import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eibs")
export default class EibController {
  @operation({
    summary: "Get Eibs",
  })
  @get()
  static getEibs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eib",
  })
  @post("{id}")
  static createEib = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
