import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fun")
export default class FunController {
  @operation({
    summary: "Get Fun",
  })
  @get()
  static getFun = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fun",
  })
  @post("{id}")
  static createFun = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
