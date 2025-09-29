import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmus")
export default class GmuController {
  @operation({
    summary: "Get Gmus",
  })
  @get()
  static getGmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmu",
  })
  @post("{id}")
  static createGmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
