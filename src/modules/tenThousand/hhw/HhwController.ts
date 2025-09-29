import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhws")
export default class HhwController {
  @operation({
    summary: "Get Hhws",
  })
  @get()
  static getHhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hhw",
  })
  @post("{id}")
  static createHhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
