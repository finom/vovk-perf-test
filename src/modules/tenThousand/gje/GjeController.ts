import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gjes")
export default class GjeController {
  @operation({
    summary: "Get Gjes",
  })
  @get()
  static getGjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gje",
  })
  @post("{id}")
  static createGje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
