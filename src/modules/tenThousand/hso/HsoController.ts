import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsos")
export default class HsoController {
  @operation({
    summary: "Get Hsos",
  })
  @get()
  static getHsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hso",
  })
  @post("{id}")
  static createHso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
