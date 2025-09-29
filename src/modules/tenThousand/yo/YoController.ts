import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yos")
export default class YoController {
  @operation({
    summary: "Get Yos",
  })
  @get()
  static getYos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yo",
  })
  @post("{id}")
  static createYo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
