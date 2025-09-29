import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izxes")
export default class IzxController {
  @operation({
    summary: "Get Izxes",
  })
  @get()
  static getIzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izx",
  })
  @post("{id}")
  static createIzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
