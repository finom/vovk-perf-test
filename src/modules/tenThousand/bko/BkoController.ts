import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkos")
export default class BkoController {
  @operation({
    summary: "Get Bkos",
  })
  @get()
  static getBkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bko",
  })
  @post("{id}")
  static createBko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
