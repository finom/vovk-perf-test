import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfos")
export default class HfoController {
  @operation({
    summary: "Get Hfos",
  })
  @get()
  static getHfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfo",
  })
  @post("{id}")
  static createHfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
