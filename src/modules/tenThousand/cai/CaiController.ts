import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cais")
export default class CaiController {
  @operation({
    summary: "Get Cais",
  })
  @get()
  static getCais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cai",
  })
  @post("{id}")
  static createCai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
