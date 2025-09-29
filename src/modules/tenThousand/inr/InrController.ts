import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inrs")
export default class InrController {
  @operation({
    summary: "Get Inrs",
  })
  @get()
  static getInrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Inr",
  })
  @post("{id}")
  static createInr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
