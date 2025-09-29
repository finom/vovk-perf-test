import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekos")
export default class EkoController {
  @operation({
    summary: "Get Ekos",
  })
  @get()
  static getEkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eko",
  })
  @post("{id}")
  static createEko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
