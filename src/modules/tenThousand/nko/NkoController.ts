import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkos")
export default class NkoController {
  @operation({
    summary: "Get Nkos",
  })
  @get()
  static getNkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nko",
  })
  @post("{id}")
  static createNko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
