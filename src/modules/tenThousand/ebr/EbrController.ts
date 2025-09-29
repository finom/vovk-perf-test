import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebrs")
export default class EbrController {
  @operation({
    summary: "Get Ebrs",
  })
  @get()
  static getEbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebr",
  })
  @post("{id}")
  static createEbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
