import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyas")
export default class GyaController {
  @operation({
    summary: "Get Gyas",
  })
  @get()
  static getGyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gya",
  })
  @post("{id}")
  static createGya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
