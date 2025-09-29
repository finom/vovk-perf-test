import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkos")
export default class LkoController {
  @operation({
    summary: "Get Lkos",
  })
  @get()
  static getLkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lko",
  })
  @post("{id}")
  static createLko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
