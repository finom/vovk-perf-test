import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inas")
export default class InaController {
  @operation({
    summary: "Get Inas",
  })
  @get()
  static getInas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ina",
  })
  @post("{id}")
  static createIna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
