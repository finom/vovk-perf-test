import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewus")
export default class EwuController {
  @operation({
    summary: "Get Ewus",
  })
  @get()
  static getEwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewu",
  })
  @post("{id}")
  static createEwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
