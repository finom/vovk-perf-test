import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htos")
export default class HtoController {
  @operation({
    summary: "Get Htos",
  })
  @get()
  static getHtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hto",
  })
  @post("{id}")
  static createHto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
