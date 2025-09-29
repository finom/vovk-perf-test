import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckos")
export default class CkoController {
  @operation({
    summary: "Get Ckos",
  })
  @get()
  static getCkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cko",
  })
  @post("{id}")
  static createCko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
