import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juqs")
export default class JuqController {
  @operation({
    summary: "Get Juqs",
  })
  @get()
  static getJuqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juq",
  })
  @post("{id}")
  static createJuq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
