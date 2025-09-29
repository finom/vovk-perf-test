import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzos")
export default class DzoController {
  @operation({
    summary: "Get Dzos",
  })
  @get()
  static getDzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzo",
  })
  @post("{id}")
  static createDzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
