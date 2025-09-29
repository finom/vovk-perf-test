import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hais")
export default class HaiController {
  @operation({
    summary: "Get Hais",
  })
  @get()
  static getHais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hai",
  })
  @post("{id}")
  static createHai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
