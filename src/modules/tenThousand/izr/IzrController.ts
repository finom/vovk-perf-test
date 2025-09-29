import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izrs")
export default class IzrController {
  @operation({
    summary: "Get Izrs",
  })
  @get()
  static getIzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izr",
  })
  @post("{id}")
  static createIzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
