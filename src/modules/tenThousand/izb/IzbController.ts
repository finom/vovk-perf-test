import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izbs")
export default class IzbController {
  @operation({
    summary: "Get Izbs",
  })
  @get()
  static getIzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izb",
  })
  @post("{id}")
  static createIzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
