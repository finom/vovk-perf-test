import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izjs")
export default class IzjController {
  @operation({
    summary: "Get Izjs",
  })
  @get()
  static getIzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izj",
  })
  @post("{id}")
  static createIzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
