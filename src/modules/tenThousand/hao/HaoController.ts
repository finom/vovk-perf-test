import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haos")
export default class HaoController {
  @operation({
    summary: "Get Haos",
  })
  @get()
  static getHaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hao",
  })
  @post("{id}")
  static createHao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
