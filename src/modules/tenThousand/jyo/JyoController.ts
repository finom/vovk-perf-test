import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyos")
export default class JyoController {
  @operation({
    summary: "Get Jyos",
  })
  @get()
  static getJyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyo",
  })
  @post("{id}")
  static createJyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
