import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izos")
export default class IzoController {
  @operation({
    summary: "Get Izos",
  })
  @get()
  static getIzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izo",
  })
  @post("{id}")
  static createIzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
