import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkos")
export default class DkoController {
  @operation({
    summary: "Get Dkos",
  })
  @get()
  static getDkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dko",
  })
  @post("{id}")
  static createDko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
