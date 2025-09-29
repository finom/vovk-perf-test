import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coxen")
export default class CoxController {
  @operation({
    summary: "Get Coxen",
  })
  @get()
  static getCoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cox",
  })
  @post("{id}")
  static createCox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
