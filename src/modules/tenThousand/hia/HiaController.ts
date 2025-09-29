import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hias")
export default class HiaController {
  @operation({
    summary: "Get Hias",
  })
  @get()
  static getHias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hia",
  })
  @post("{id}")
  static createHia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
