import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cos")
export default class CosController {
  @operation({
    summary: "Get Cos",
  })
  @get()
  static getCos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cos",
  })
  @post("{id}")
  static createCos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
