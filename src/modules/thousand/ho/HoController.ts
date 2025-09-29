import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hos")
export default class HoController {
  @operation({
    summary: "Get Hos",
  })
  @get()
  static getHos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ho",
  })
  @post("{id}")
  static createHo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
