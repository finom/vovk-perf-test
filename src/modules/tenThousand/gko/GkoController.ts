import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkos")
export default class GkoController {
  @operation({
    summary: "Get Gkos",
  })
  @get()
  static getGkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gko",
  })
  @post("{id}")
  static createGko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
