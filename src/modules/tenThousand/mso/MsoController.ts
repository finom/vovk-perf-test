import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msos")
export default class MsoController {
  @operation({
    summary: "Get Msos",
  })
  @get()
  static getMsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mso",
  })
  @post("{id}")
  static createMso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
