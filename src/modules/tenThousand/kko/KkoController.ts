import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkos")
export default class KkoController {
  @operation({
    summary: "Get Kkos",
  })
  @get()
  static getKkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kko",
  })
  @post("{id}")
  static createKko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
