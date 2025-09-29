import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qus")
export default class QuController {
  @operation({
    summary: "Get Qus",
  })
  @get()
  static getQus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qu",
  })
  @post("{id}")
  static createQu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
