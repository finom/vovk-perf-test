import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buses")
export default class BusController {
  @operation({
    summary: "Get Buses",
  })
  @get()
  static getBuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bus",
  })
  @post("{id}")
  static createBus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
