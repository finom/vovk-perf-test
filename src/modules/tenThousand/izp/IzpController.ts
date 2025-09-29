import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izps")
export default class IzpController {
  @operation({
    summary: "Get Izps",
  })
  @get()
  static getIzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izp",
  })
  @post("{id}")
  static createIzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
