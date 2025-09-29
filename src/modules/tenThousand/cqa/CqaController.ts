import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqas")
export default class CqaController {
  @operation({
    summary: "Get Cqas",
  })
  @get()
  static getCqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqa",
  })
  @post("{id}")
  static createCqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
