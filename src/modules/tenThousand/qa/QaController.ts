import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qas")
export default class QaController {
  @operation({
    summary: "Get Qas",
  })
  @get()
  static getQas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qa",
  })
  @post("{id}")
  static createQa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
