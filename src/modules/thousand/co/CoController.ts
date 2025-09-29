import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cos")
export default class CoController {
  @operation({
    summary: "Get Cos",
  })
  @get()
  static getCos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Co",
  })
  @post("{id}")
  static createCo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
